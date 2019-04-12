import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-fileupload',
  template: `
      <div [formGroup]="form">
        <input-file  [formControlName]="field.name"></input-file>
      </div>
    `,
})
export class FileUploadComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  constructor() {
  }
  ngOnChange() {
    console.log(this.field.value);
    // this.field.value.
  }
}
