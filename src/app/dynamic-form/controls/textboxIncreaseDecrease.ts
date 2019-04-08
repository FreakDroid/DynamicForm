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
               [id]="field.name" [name]="field.name" [formControlName]="field.name" [minlength]="field.minLength"
               [maxlength]="field.maxLength">
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
    setTimeout(() =>{
      console.log('llegue al onInit');
      const initialValue = this.field.minLength;
      this.value = initialValue;
      this.form.controls[this.field.name].setValue(initialValue);
    });
  }

  increase(e) {
    if (this.value < this.field.maxLength) {
      this.value = this.value + 1;
      this.form.controls[this.field.name].patchValue(this.value);
    }
  }

  decrease(e) {
    if (this.value > this.field.minLength) {
      this.value = this.value - 1;
      this.form.controls[this.field.name].patchValue(this.value);
    }
  }

}
