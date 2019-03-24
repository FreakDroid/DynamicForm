import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormQuestionContainerComponent } from './form-question-container/form-question-container.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [FormQuestionContainerComponent],
  imports: [
    CommonModule,
    DynamicFormModule
  ],
  exports: [
    FormQuestionContainerComponent
  ]
})
export class FormQuestionContainerModule { }
