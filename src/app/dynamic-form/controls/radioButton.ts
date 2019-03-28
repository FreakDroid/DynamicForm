import {Component, Input} from '@angular/core';
import { FormGroup, FormGroupDirective, ControlContainer } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-radio',
  template: `
    <div class="btn-group btn-group-toggle dynamicForm-maxSize radioButtonsInLine" ngbRadioGroup
         [formGroup]="form" [formControlName]="field.name">
      <label *ngFor="let opt of field.options" ngbButtonLabel class="btn-primary borderRadius dynamicForm-maxSize">
       <input ngbButton type="radio" [value]="opt.key"> {{opt.label}}
      </label>
      <br/>
    </div>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class RadioButtonComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
}
