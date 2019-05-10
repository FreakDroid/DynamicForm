import {Component, Input, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-text-box-increase-decrease',
  template: `
    <div class="dynamicForm-maxSize" [formGroup]="form">
      <div class="text-center">
        <label class="form-control-label" [attr.for]="field.label">
          {{field.label}}
        </label>
        <input type="button" class="button-rounded" (click)="decrease(field.value)" value="-">
        <input class="form-control textbox-decrease-increase align-middle" type="number"
               [id]="field.name" [name]="field.name" [formControlName]="field.name" [minlength]="field.min"
               [maxlength]="field.max" >
        <input type="button" (click)="increase(field.value)" value="+" class="button-rounded">
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextboxIncreaseDecreaseComponent implements AfterViewInit {
  @Input() field: any = {};
  @Input() form: FormGroup;
  showMe = false;
  value = 0;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    //TODO Ugly please update it later
    setTimeout(() => {
      console.log('llegue al onInit');
      console.log('this.field.min ', this.field.min);
      console.log('this.field.value ', this.field.value);
      this.value = this.field.value || this.field.min;
      this.form.controls[this.field.name].setValue(this.value);
    });
  }

  increase(e) {
    if (this.value < this.field.max) {
      console.log('entre en el if increase');
      this.value = this.value + 1;
      this.form.controls[this.field.name].patchValue(this.value);
    }
  }

  decrease(e) {
    console.log('increase ', e);
    if (this.value > this.field.min) {
      console.log('entre en el if decrease');
      this.value = this.value - 1;
      this.form.controls[this.field.name].patchValue(this.value);
    }
  }

}
