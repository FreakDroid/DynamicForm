import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-radio',
  template: `
    <div class="btn-group btn-group-toggle dynamicForm-maxSize radioButtonsInLine" ngbRadioGroup [formGroup]="form">
        <label *ngFor="let opt of field.options" ngbButtonLabel class="btn-primary dynamicForm-maxSize">
          <input ngbButton type="radio" [value]="opt.key">  {{opt.label}}
        </label>
        <br/>
    </div>
  `
})
export class RadioButtonComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
}
