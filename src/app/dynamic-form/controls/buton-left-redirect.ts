import {Component, Input} from '@angular/core';
import { FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

// text,email,tel,textarea,password,
@Component({
  selector: 'app-button-left-redirect',
  template: `
    <div class="col">
      <button class="btn btn-green mb-2 float-right" (click)="redirectMe(field.RedirectTo); $event.preventDefault()">{{field.text}}</button>
    </div>
  `,
})
export class ButtonLeftRedirectComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;

  constructor(private router: Router) {
  }


  redirectMe(redirectTo) {
    console.log(redirectTo);
    //this.router.navigate([redirectTo]);
  }
}
