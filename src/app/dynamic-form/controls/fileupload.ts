import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-fileupload',
  template: `
      <div [formGroup]="form">
        <input-file [iconAdd]="field.icon"  [formControlName]="field.name"></input-file>
      </div>
    `,
})
export class FileUploadComponent implements OnInit {
  @Input() field: any = {};
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  img: any;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    console.log(this.field.value);
    this.img = this.field.value && [{ preview: this.sanitizer.bypassSecurityTrustResourceUrl(this.field.value[0].preview)}];
    setTimeout(() => {
      this.form.controls[this.field.name].setValue(this.img);
    });
  }

  ngOnChange() {
    console.log(this.field.value);
    // this.field.value.
  }
}
