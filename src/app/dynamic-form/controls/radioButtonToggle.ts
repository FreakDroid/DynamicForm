import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormGroupDirective, ControlContainer } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-btradio',
  template: `
    <div class="btn-group btn-group-toggle dynamicForm-maxSize radioButtonsInLine"  ngbRadioGroup
         [formGroup]="form" [formControlName]="field.name">
      <label *ngFor="let opt of field.options" ngbButtonLabel class="btn-primary borderRadius dynamicForm-maxSize">
       <input ngbButton type="radio" [value]="opt.key" (click)="selected(opt.key)"> {{opt.label}}
      </label>
      <br/>

      <div class="input-group" *ngFor="let subField of field?.subFields">
        <div class="dynamicForm-maxSize" *ngIf="subField.group.value == showMe">
          <div *ngFor="let control of subField.group.controls">
            <div class="dynamicForm-maxSize" *ngIf="showMe" [ngSwitch]="control.type">
              <label class="form-control-label" [attr.for]="control.label">
                {{control.label}}
              </label>
              <app-textbox class="dynamicForm-maxSize" *ngSwitchCase="'text'" [field]="control"
                           [form]="form"></app-textbox>
              <app-dropdown class="dynamicForm-maxSize" *ngSwitchCase="'dropdown'" [field]="control" [form]="form"></app-dropdown>
              <app-radio class="dynamicForm-maxSize" *ngSwitchCase="'radio'" [field]="control" [form]="form"></app-radio>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class RadioButtonToggleComponent implements OnInit{
  @Input() field: any = {};
  @Input() form: FormGroup;
  showMe = false;
  constructor() {
  }

  ngOnInit() {
    console.log(this.field.name);
    console.log(this.field);
    console.log('this.form.controls[this.field.name]', this.form.controls);
    if (this.field.value != '') {
      this.selected(this.field.value);
    }
  }

  get getThisField() { return this.form.controls[this.field.name]; }

  selected(e) {
    this.showMe = e;
    const groupToDisable = this.field.subFields.filter(group => group.group.value != e);
    const groupToAble = this.field.subFields.filter(group => group.group.value == e);


    for (const toDisable of groupToDisable) {
      for (const itemD of toDisable.group.controls) {
        this.form.controls[itemD.name].disable();
        if (itemD.type == 'radio') {
          this.form.controls[itemD.name].disable();
        }
      }
    }

    for (const toAble of groupToAble) {
      for (const itemE of toAble.group.controls) {
        this.form.controls[itemE.name].enable();
        if (itemE.type == 'radio') {
          this.form.controls[itemE.name].enable();
        }
      }
    }
  }
}
