import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter();
  @Input() formInfo: any = {};
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    let fieldsCtrls = {};
    for (let f of this.formInfo.fields) {
      if (f.type === 'switchToggleField' || f.type === 'switchToggleFieldWithBox') {
        for (let k of f.subFields) {
          fieldsCtrls[k.name] = new FormControl(k.value || '', Validators.required);
        }
      } else if (f.type === 'radioButtonToggle') {
        //console.log(f.subFields);
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
        for (let c of f.subFields) {
          for (let l of c.group.controls) {
            //console.log(l);
            fieldsCtrls[l.name] = new FormControl(l.value || '', Validators.required);
          }
        }
      } else if (f.type !== 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
      } else {
        const opts = {};
        for (const opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts);
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }
}
