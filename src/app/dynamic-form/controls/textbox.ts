import {Component, Input, OnInit} from '@angular/core';
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
      {{field.name}}
      <fa-icon *ngIf="form.controls[field.name]?.errors?.required" [icon]="['fa', 'exclamation-circle']"></fa-icon>
    </div>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class TextBoxComponent implements OnInit {
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

  ngOnInit(){
    console.log('knock');
    console.log(this.field.name);
    console.log(this.form.controls);
  }
}
