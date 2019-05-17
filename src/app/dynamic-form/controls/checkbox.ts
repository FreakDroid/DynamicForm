import {Component, forwardRef, Input} from '@angular/core';
import {FormGroup, FormGroupDirective, ControlContainer, NG_VALUE_ACCESSOR} from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-checkbox',
  template: `
    <div [formGroup]="form">
      <div [formGroupName]="field.name" >
        <div *ngFor="let opt of field.options" class="form-check form-check">
          <label class="form-check-label checkbox-inline">
            <input [formControlName]="opt.key" class="form-check-input" type="checkbox" id="inlineCheckbox1"
                   value="option1" [checked]="opt.cheked" />
            {{opt.label}}</label>
        </div>
      </div>
    </div>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CheckboxComponent),
    }
  ]
})
export class CheckboxComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
}
