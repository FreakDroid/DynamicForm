import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-switch-toggle-field',
  template: `
    <div class="dynamicForm-maxSize" [formGroup]="form">
      <div class="text-center">
        <label class="form-control-label" [attr.for]="field.label">
          {{field.label}}
        </label>
        <ui-switch class="align-middle switch-style"
                   (change)="onChange($event)"></ui-switch>
      </div>

      <div class="input-group" *ngFor="let subField of field?.subFields">
        <div class="dynamicForm-maxSize" *ngIf="showMe" [ngSwitch]="subField.type">
          <label class="form-control-label" [attr.for]="subField.label">
            {{subField.label}}
          </label>
          <app-textbox class="dynamicForm-maxSize" *ngSwitchCase="'text'" [field]="subField"
                       [form]="form"></app-textbox>
        </div>
      </div>
    </div>
  `
})
export class SwitchToggleFieldComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  showMe = false;

  constructor() {

  }

  onChange(e) {
    this.showMe = e;
  }
}
