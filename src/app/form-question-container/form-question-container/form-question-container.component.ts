import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormQuestionContainerService} from '../form-question-container.service';
import {DynamicFormModel} from '../../model/DynamicForm.model';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-form-question-container',
  templateUrl: './form-question-container.component.html',
  styleUrls: ['./form-question-container.component.scss']
})
export class FormQuestionContainerComponent implements OnInit, OnDestroy {

  form: FormGroup;
  private subscription: Subscription[] = [];
  formInfo: any;
  filtersLoaded: Promise<boolean>;
  // The step where I'm
  current: any;
  prev: any;
  step: any;
  view: any;

  ngOnInit() {
    //Changing the URL
    console.log('llegue a dynamic');
    this.location.replaceState('/dynamic');
    this.step = this.route.snapshot.paramMap.get('step');
    this.view = this.route.snapshot.paramMap.get('view');

    console.log('step', this.step);
    console.log('step', this.view);

    if (this.step && this.view) {
      this.current = {step : this.step, view: this.view};
      this.backGoTo();
    } else {
      this.checkStep();
    }
  }

  constructor(private formService: FormQuestionContainerService, private router: Router, private spinner: NgxSpinnerService,
              private toastr: ToastrService, private route: ActivatedRoute, private location: Location, private auth: AuthService) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

  }

  onUpload(e) {
    console.log('onUpload');
    console.log(e);
  }

  getFields() {
    return this.formInfo;
  }

  checkStep() {
    this.subscription.push(this.formService.checkStep().subscribe((res: DynamicFormModel) => {
        console.log(res);
        // @ts-ignore
        this.fillForm(res);
      },
      error => {
        console.log('error', error);

        if (error.status == 403 && error.error.redirect == '/waiting_for_approval') {
          console.log('waiting_for_approval');
          this.router.navigate(['/waiting_for_approval']);
        } else if (error.status == 403 && error.error.redirect == '/email_not_verify') {
          console.log('/validate');
          this.router.navigate(['/validate']);
        }
        this.toastr.error(error.error.message, 'Error');
      }
    ));
  }

  onSubmit(dynamicFormValue) {
    this.spinner.show();
    dynamicFormValue.step = this.current.step;
    dynamicFormValue.view = this.current.view;
    console.log(dynamicFormValue);

    const file = dynamicFormValue && dynamicFormValue.selfie;
    console.log(file);

    if (file) {
      console.log(file[0]);
      dynamicFormValue.selfie = file[0].preview.split(',')[1];
    }

    console.log(dynamicFormValue);
    this.subscription.push(this.formService.saveValue(dynamicFormValue).subscribe(rest => {
        console.log(rest);
        this.fillForm(rest);
        this.spinner.hide();
      },
      error => {

        this.toastr.error(error.error.message, 'Error');
        this.spinner.hide();
      }));
  }

  backGoTo() {
    this.spinner.show();
    console.log('backGoTo', this.current);
    const {step, view} = this.current;
    if (step === 1 && view === 1) {
      // Redirect to login
      console.log('entre en el if');
      this.spinner.hide();
      this.auth.cleanForLogOut();
      this.router.navigate(['']);
    } else {
      this.subscription.push(this.formService.backGoto(this.current).subscribe(rest => {
          console.log(rest);
          this.fillForm(rest);
          this.spinner.hide();
        },
        error => {
          this.toastr.error(error.error.message, 'Error');
          this.spinner.hide();
          this.checkStep();
        }));
    }
  }

  fillForm(res) {
    const {basicFormInfo, fields, current, prev} = res.data;
    this.current = current;
    const jsonForm = {basicFormInfo, fields};
    this.formInfo = jsonForm;

    this.prev = prev ? prev : 0;

    console.log('my Prev ', prev);
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.formInfo))
    });
    console.log(jsonForm);

    this.filtersLoaded = Promise.resolve(true);
  }


  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves.
    this.subscription.forEach(subscriptions => subscriptions.unsubscribe());
  }
}
