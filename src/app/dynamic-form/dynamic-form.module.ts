import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbRadioGroup} from '@ng-bootstrap/ng-bootstrap';


import {DynamicFormRoutingModule} from './dynamic-form-routing.module';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {TextBoxComponent} from './controls/textbox';
import {FieldBuilderComponent} from './field-builder/field-builder.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RadioButtonComponent} from './controls/radioButton';
import {DropDownComponent} from './controls/dropdown';



@NgModule({
  declarations: [DynamicFormComponent, FieldBuilderComponent, TextBoxComponent, RadioButtonComponent, DropDownComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormRoutingModule,
    FontAwesomeModule,
    NgbModule
  ],
  exports: [
    DynamicFormComponent,
    DynamicFormRoutingModule
  ],
  providers: [
    NgbRadioGroup
  ]
})
export class DynamicFormModule {
  constructor() {
    library.add(faExclamationCircle);
  }
}
