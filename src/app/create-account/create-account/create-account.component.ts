import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {MustMatch} from '../_helper/must-match.validator';
import {Router} from '@angular/router';
import {CreateAccountService} from '../create-account.service';
import {TokenService} from '../../token/token.service';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  createAccount: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private createAccountService: CreateAccountService,
              private tokenService: TokenService) {
  }

  get f() {
    return this.createAccount.controls;
  }

  ngOnInit() {
    this.createAccount = this.formBuilder.group({
        userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        middleName: new FormControl('', Validators.minLength(3)),
        lastName: new FormControl('', [Validators.required, Validators.minLength(3)])
      },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
  }

  goBack() {
    this.router.navigate(['']);
  }

  submit(formValue) {
    console.log(formValue);
    // First get the token;
    this.tokenService.getToken().subscribe(res => {
      const token = res && res.data && res.data.token;
      console.log(token);
      localStorage.setItem('token.model.ts', token);
      this.createAccountService.register(formValue).subscribe(resCreateAccount => {
          console.log(resCreateAccount);
          // @ts-ignore
          const ticket = resCreateAccount && resCreateAccount.data.user.ticket;
          localStorage.setItem('ticket', ticket);
          // You should redirect to dynamic form.
        },
        errorCreateAccount => {
          console.log('error creating account', errorCreateAccount);
        });
    }, error => {
    });
  }

}
