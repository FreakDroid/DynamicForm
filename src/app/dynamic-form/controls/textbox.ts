import {Component, Input} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-textbox',
  template: `
    <div [formGroup]="form">
      <input class="form-control"  *ngIf="!field.multiline" [attr.type]="field.type" class="form-control"
             [id]="field.name" [name]="field.name" [formControlName]="field.name">
      <textarea *ngIf="field.multiline" [class.is-invalid]="isDirty && !isValid"
                [formControlName]="field.name" [id]="field.name"
                rows="9" class="form-control" [placeholder]="field.placeholder"></textarea>
    </div>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class TextBoxComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.field.name].valid;
  }

  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }

  constructor() {

  }
}
