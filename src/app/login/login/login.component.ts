import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import { LoginServiceService } from '../login-service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginServiceService) {
  }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        login: new FormControl('', [Validators.required, Validators.minLength(8)]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
      });
  }

  goToCreateAccount() {
    this.router.navigate(['/create-account']);
  }

  logMe(formValue) {
     this.loginService.loginService(formValue);
  }
}
