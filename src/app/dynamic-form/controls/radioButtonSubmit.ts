import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormGroupDirective, ControlContainer } from '@angular/forms';


//NOTE this control won't apply the css class
@Component({
  selector: 'app-sradio',
  template: `
    <div class="btn-group btn-group-toggle dynamicForm-maxSize radioButtonsInLine" ngbRadioGroup
         [formGroup]="form" [formControlName]="field.name">
      <label *ngFor="let opt of field.options" style="white-space:pre-wrap; z-index: 0" ngbButtonLabel 
             class="btn-primary borderRadius dynamicForm-maxSize">
        <input ngbButton type="radio" [value]="opt.key" (click)="selected(opt.key)"> {{opt.label}}
      </label>
      <br/>
    </div>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class RadioButtonSubmitComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;

  @Output() onSubmit = new EventEmitter();

  selected(e) {
    console.log(e);
    this.form.controls[this.field.name].setValue(e);
    this.onSubmit.emit();
  }

}
