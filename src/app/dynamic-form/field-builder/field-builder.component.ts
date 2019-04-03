import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.scss']
})
export class FieldBuilderComponent implements OnInit {

  @Input() field: any;
  @Input() form: any;
  showMe = false;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  get thisField() { return this.form.controls[this.field.name]; }

  constructor() { }

  ngOnInit() {
  }

  onChange(e) {
    this.showMe = e;
  }

}
