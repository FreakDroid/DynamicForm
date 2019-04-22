import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Output() submit = new EventEmitter();
  @Output() back = new EventEmitter();
  @Input() formInfo: any = {};
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    const fieldsCtrls = {};
    for (const f of this.formInfo.fields) {
      if (f.type === 'switchToggleField' || f.type === 'switchToggleFieldWithBox') {
        for (const k of f.subFields) {
          fieldsCtrls[k.name] = new FormControl(k.value || '', this.createValidators(k));
        }
      } else if (f.type === 'radioButtonToggle') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', this.createValidators(f));
        for (const c of f.subFields) {
          for (const l of c.group.controls) {
            fieldsCtrls[l.name] = new FormControl(l.value || '', this.createValidators(l));
          }
        }
      } else if (f.type !== 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', this.createValidators(f));
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


  private createValidators(param) {
    const { required, minLength, pattern } = param;
    const validators = [];
    if (required) {
      validators.push(Validators.required);
    }

    if (minLength) {
      validators.push(Validators.minLength(minLength));
    }

    if (pattern) {
      validators.push(Validators.pattern(pattern));
    }

    return validators;
  }
}
