import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormQuestionContainerComponent } from './form-question-container/form-question-container.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FormQuestionContainerComponent],
  imports: [
    CommonModule,
    DynamicFormModule,
    NgbModule
  ],
  exports: [
    FormQuestionContainerComponent
  ]
})
export class FormQuestionContainerModule { }
