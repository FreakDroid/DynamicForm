import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormGroupDirective, ControlContainer } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-sradio',
  template: `
    <div class="btn-group btn-group-toggle dynamicForm-maxSize radioButtonsInLine" ngbRadioGroup
         [formGroup]="form" [formControlName]="field.name">
      <label *ngFor="let opt of field.options" ngbButtonLabel class="btn-primary borderRadius dynamicForm-maxSize">
        <input ngbButton type="radio" [value]="opt.key" (click)="selected()"> {{opt.label}}
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

  selected() {
    this.onSubmit.emit();
  }
}
