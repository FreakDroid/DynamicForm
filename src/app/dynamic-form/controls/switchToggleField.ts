import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switch-toggle-field',
  template: `
      <div [formGroup]="form">
        <ui-switch (change)="onChange($event)"></ui-switch>

        <div *ngFor="let field of field.subFields">
          <div *ngIf="showMe" [ngSwitch]="field.type">
            <app-textbox class="dynamicForm-maxSize" *ngSwitchCase="'text'" [field]="field" [form]="form" [formControlName]="field.name"></app-textbox>
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
