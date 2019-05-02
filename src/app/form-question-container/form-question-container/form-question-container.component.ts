import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormQuestionContainerService} from '../form-question-container.service';
import {DynamicFormModel} from '../../model/DynamicForm.model';
import { Router } from '@angular/router';
import {Subscription} from 'rxjs';

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

  ngOnInit() {
  }

  constructor(private formService: FormQuestionContainerService, private router: Router) {
   this.subscription.push(this.formService.checkStep().subscribe((res: DynamicFormModel) => {
        console.log(res);
        // @ts-ignore
        this.fillForm(res);
      },
      error => {
        console.log('error', error);
        if (error.status === 403) {
          this.router.navigate(['/validate']);
        }
      }
    ));

    /* this.unsubcribe = this.form.valueChanges.subscribe((update) => {
       console.log('llegue');
       console.log(update);
       this.formInfo = JSON.parse(update.fields);
     }); */
  }

  onUpload(e) {
    console.log('onUpload');
    console.log(e);
  }

  getFields() {
    return this.formInfo;
  }

  onSubmit(dynamicFormValue) {
    dynamicFormValue.step = this.current.step;
    dynamicFormValue.view = this.current.view;
    console.log(dynamicFormValue);

    this.subscription.push(this.formService.saveValue(dynamicFormValue).subscribe(rest => {
      console.log(rest);
      this.fillForm(rest);
      },
      error => {

      }));
  }

  back() {
    console.log('back', this.current);
    const { step, view } = this.current;
    if (step === 1 && view === 1) {
      // Redirect to login
      this.router.navigate(['']);
    } else {
      this.subscription.push(this.formService.back(this.current).subscribe(rest => {
          console.log(rest);
          this.fillForm(rest);
        },
        error => {

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
