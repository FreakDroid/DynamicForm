import {Component, Input} from '@angular/core';
import { FormGroup, FormGroupDirective, ControlContainer } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-link',
  template: `
      <a href='{{field.url}}'>{{field.label}}</a>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class LinkComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
}
