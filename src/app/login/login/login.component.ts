import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginServiceService} from '../login-service/login-service.service';
import {TokenService} from '../../token/token.service';
import {Subscription} from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  error: boolean;

  private subscriptions: Subscription;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginServiceService,
              private tokenService: TokenService, private spinner: NgxSpinnerService) {
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  goToCreateAccount() {
    this.router.navigate(['/create-account']);
  }

  logMe(formValue) {
    this.spinner.show();
    this.error = false;
    this.subscriptions = this.tokenService.getToken().subscribe(res => {
      const token = res && res.data && res.data.token;
      localStorage.setItem('token', token);
      this.loginService.loginService(formValue).subscribe(resLogin => {
          console.log(resLogin);
          // @ts-ignore
          const {error} = resLogin;
          if (error === 403) {
            this.error = true;
          } else {
            // @ts-ignore
            const ticket = resLogin && resLogin.data.Ticket; // Tipo no debe ser caps
            localStorage.setItem('ticket', ticket);
            // You should redirect to dynamic form.
            this.spinner.hide();
            this.router.navigate(['/dynamic']);
          }
        },
        errorLogin => {
          console.log('error creating account', errorLogin);
          this.error = true;
          this.spinner.hide();
        });
    }, error => {
    });
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
