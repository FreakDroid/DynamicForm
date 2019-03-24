import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {DynamicFormRoutingModule} from './dynamic-form-routing.module';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {TextBoxComponent} from './controls/textbox';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [DynamicFormComponent, FieldBuilderComponent, TextBoxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    DynamicFormComponent,
    DynamicFormRoutingModule
  ]
})
export class DynamicFormModule {
  constructor() {
    library.add(faExclamationCircle);
  }
}
