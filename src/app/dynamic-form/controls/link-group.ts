import {Component, Input} from '@angular/core';
import { FormGroup, FormGroupDirective, ControlContainer } from '@angular/forms';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-group-link',
  template: `
    <div class="input-group" *ngFor="let link of field">
      <a href='{{link.url}}' target="_blank">{{link.label}}</a>
    </div>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class LinkGroupComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
}
