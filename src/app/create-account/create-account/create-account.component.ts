import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {MustMatch} from '../_helper/must-match.validator';
import {Router} from '@angular/router';
import {CreateAccountService} from '../create-account.service';
import {TokenService} from '../../token/token.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {MemoryDataService} from '../../memory-data/memory-data.service';
import {CreateAccountModel} from '../../model/createAccount.model';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  createAccount: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private createAccountService: CreateAccountService,
              private tokenService: TokenService, private spinner: NgxSpinnerService, private toastr: ToastrService,
              private memoryService: MemoryDataService) {
  }

  get f() {
    return this.createAccount.controls;
  }

  ngOnInit() {
    this.createAccount = this.formBuilder.group({
        username: new FormControl('', [Validators.required, Validators.minLength(6)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        password_confirmation: new FormControl('', [Validators.required, Validators.minLength(6)]),
        firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        middleName: new FormControl('', Validators.minLength(3)),
        lastName: new FormControl('', [Validators.required, Validators.minLength(3)])
      },
      {
        validator: MustMatch('password', 'password_confirmation')
      });
  }

  goBack() {
    this.router.navigate(['']);
  }

  submit(formValue) {
    this.spinner.show();
    console.log(formValue);
    this.tokenService.getToken().subscribe(res => {
      const token = res && res.data && res.data.token;
      console.log(token);
      const createAccount = new CreateAccountModel(formValue.email,
        formValue.username, formValue.password, formValue.firstName, formValue.middleName, formValue.lastName, 0,
        0, 0, token, formValue.password_confirmation);
      this.memoryService.saveCreateAccountState(createAccount);
      console.log(this.memoryService.getCreateAccountState);
      this.spinner.hide();
      this.router.navigate(['/hear-about-us']);
    });
  }

}
