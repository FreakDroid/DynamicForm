import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormGroupDirective, ControlContainer } from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

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

  ngOnInit(){
    console.log(this.field.name);
    console.log(this.field);
    console.log('this.form.controls[this.field.name]', this.form.controls);
  }

  get getThisField() { return this.form.controls[this.field.name]; }

  selected(e) {
    console.log(e);
    this.showMe = e;

    const groupToDisable = this.field.subFields.filter(group => group.group.value != e);

    const groupToAble = this.field.subFields.filter(group => group.group.value == e);

    for (const itemD of groupToDisable[0].group.controls) {
      console.log(itemD);
      console.log(this.form.controls[itemD.name]);

      this.form.controls[itemD.name].disable();
    }
    for (const itemE of groupToAble[0].group.controls) {
      this.form.controls[itemE.name].enable();
    }
  }
}
