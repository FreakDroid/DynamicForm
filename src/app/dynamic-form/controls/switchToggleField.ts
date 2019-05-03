import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-switch-toggle-field',
  template: `
    <div class="dynamicForm-maxSize" [formGroup]="form">
      <div class="text-center">
        <label class="form-control-label" [attr.for]="field.label">
          {{field.label}}
        </label>
        <ui-switch class="align-middle switch-style"
                   (change)="onChange($event)" [formControlName]="field.name"></ui-switch>
      </div>

      <div class="input-group" *ngFor="let subField of field?.subFields">
        <div class="dynamicForm-maxSize" *ngIf="showMe" [ngSwitch]="subField.type">
          <label class="form-control-label" [attr.for]="subField.label">
            {{subField.label}}
          </label>
          <app-textbox class="dynamicForm-maxSize" *ngSwitchCase="'text'" [field]="subField"
                       [form]="form"></app-textbox>
          <app-dropdown class="dynamicForm-maxSize" *ngSwitchCase="'dropdown'" [field]="subField" [form]="form"></app-dropdown>
        </div>
      </div>
    </div>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class SwitchToggleFieldComponent implements OnInit {
  @Input() field: any = {};
  @Input() form: FormGroup;
  showMe = false;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.field.name);
    console.log(this.field);
    console.log('this.form.controls[this.field.name]', this.form.controls);
    if (this.field.value != '') {
      this.onChange(this.field.value);
    }
  }

  onChange(e) {
    this.showMe = !!e;
  }
}
