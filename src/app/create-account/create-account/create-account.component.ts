import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MustMatch } from '../_helper/must-match.validator';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  createAccount: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  get f() { return this.createAccount.controls; }

  ngOnInit() {
    this.createAccount = this.formBuilder.group({
        userName: new FormControl('', [Validators.required, Validators.minLength(8)]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
        firstName: new FormControl('', [Validators.required, Validators.minLength(8)]),
        middleName: new FormControl('', Validators.minLength(8)),
        lastName: new FormControl('', [Validators.required, Validators.minLength(8)])
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

}
