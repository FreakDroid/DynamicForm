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
import {Utils} from '../../util/Utils';
import {InputFile} from 'ngx-input-file';

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
  fileData: InputFile = null;

  ngOnInit() {
    //Changing the URL
    this.location.replaceState('/dynamic');
    this.step = this.route.snapshot.paramMap.get('step');
    this.view = this.route.snapshot.paramMap.get('view');
    if (this.step && this.view) {
      this.current = {step: this.step, view: this.view};
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
    this.spinner.show();
    this.subscription.push(this.formService.checkStep().subscribe((res: DynamicFormModel) => {
        console.log(res);
        // @ts-ignore
        this.fillForm(res);
        this.spinner.hide();
      },
      error => {
        console.log('error', error);

        if (error.status == 403) {
          this.router.navigate(['/' + error.error.redirect]);
        }
        //this.toastr.error(error.error.message, 'Error');
        this.spinner.hide();
      }
    ));
  }

  onSubmit(dynamicFormValue) {
    try {
      this.spinner.show();
      dynamicFormValue.step = this.current.step;
      dynamicFormValue.view = this.current.view;

      if ((this.current.step == 5 && this.current.view == 1) || (this.current.step == 5 && this.current.view == 2) || (this.current.step == 6 && this.current.view == 3)) {
        dynamicFormValue = this.getImage(dynamicFormValue);
      } else {
        dynamicFormValue.withFiles = 0;
      }
      console.log('dynamic ');
      console.log(dynamicFormValue);
      this.subscription.push(this.formService.saveValue(dynamicFormValue, dynamicFormValue.withFiles).subscribe(rest => {
          console.log(rest);
          this.fillForm(rest);
          this.spinner.hide();
        },
        error => {
          if (error.error.error == 400) {
            const errorsMessages = Utils.transformErrorMessage(error.error.messages_form);
            this.toastr.error(errorsMessages, 'Error');
          } else {
            this.toastr.error(error.error.message, 'Error');
          }
          this.spinner.hide();
        }));
    } catch (e) {

    }
  }

  getImage(dynamicFormValue) {
    const selfie = (dynamicFormValue && dynamicFormValue.selfie);
    const front = dynamicFormValue && dynamicFormValue.front;
    const back = dynamicFormValue && dynamicFormValue.back;
    const signature = dynamicFormValue && dynamicFormValue.signature;
    if (selfie) {
      const image = selfie[0].preview;
      const imageClean = image.changingThisBreaksApplicationSecurity ? image.changingThisBreaksApplicationSecurity :  image;
      dynamicFormValue.selfie = imageClean.split(',')[1];
      dynamicFormValue.withFiles = 1;
    } else if (front) {
      const imageFront = front[0].preview;
      const imageCleanFront = imageFront.changingThisBreaksApplicationSecurity ?
        imageFront.changingThisBreaksApplicationSecurity :  imageFront;
      const imageBack = back[0].preview;
      const imageCleanBack = imageBack.changingThisBreaksApplicationSecurity ?
        imageBack.changingThisBreaksApplicationSecurity :  imageBack;
      dynamicFormValue.front = imageCleanFront.split(',')[1];
      dynamicFormValue.back = imageCleanBack.split(',')[1];
      dynamicFormValue.withFiles = 2;
    } else if (signature) {
      const imagesignature = signature[0].preview;
      const imageCleansignature = imagesignature.changingThisBreaksApplicationSecurity ?
        imagesignature.changingThisBreaksApplicationSecurity :  imagesignature;
      dynamicFormValue.signature = imageCleansignature.split(',')[1];
      dynamicFormValue.withFiles = 3;
    }
    return dynamicFormValue;
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

    if(res.redirect)
      this.router.navigate(['/' + res.redirect]);

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
