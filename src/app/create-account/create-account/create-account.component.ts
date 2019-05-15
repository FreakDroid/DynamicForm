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
    const createAccount: CreateAccountModel = this.memoryService.getCreateAccountState;

    this.createAccount = this.formBuilder.group({
        username: new FormControl(createAccount ? createAccount.username : '', [Validators.required, Validators.minLength(6)]),
        email: new FormControl(createAccount ? createAccount.email : '', [Validators.required, Validators.email]),
        password: new FormControl(createAccount ? createAccount.password : '', [Validators.required, Validators.minLength(6)]),
        password_confirmation: new FormControl(createAccount ? createAccount.password_confirmation : '',
          [Validators.required, Validators.minLength(6)]),
        firstName: new FormControl(createAccount ? createAccount.firstName : '', [Validators.required, Validators.minLength(3)]),
        middleName: new FormControl(createAccount ? createAccount.middleName : '', Validators.minLength(3)),
        lastName: new FormControl(createAccount ? createAccount.lastName : '', [Validators.required, Validators.minLength(3)])
      },
      {
        validator: MustMatch('password', 'password_confirmation')
      });
  }

  goBack() {
    this.memoryService.saveCreateAccountState(null);
    this.router.navigate(['']);
  }

  submit(formValue) {
    this.spinner.show();
    console.log(formValue);
    this.tokenService.getToken().subscribe(res => {
      const token = res && res.data && res.data.token;
      console.log(token);
      const createAccountSaved: CreateAccountModel = this.memoryService.getCreateAccountState;
      const createAccount = new CreateAccountModel(formValue.email,
        formValue.username, formValue.password, formValue.firstName, formValue.middleName, formValue.lastName,
        createAccountSaved  ? createAccountSaved.hearAboutFolionet : 0,
        createAccountSaved  ? createAccountSaved.investmentExperience : 0,
        createAccountSaved  ? createAccountSaved.investmentObjective : 0, token, formValue.password_confirmation);
      this.memoryService.saveCreateAccountState(createAccount);
      console.log(this.memoryService.getCreateAccountState);
      this.spinner.hide();
      this.router.navigate(['/hear-about-us']);
    }, error => {
      this.toastr.error(error.error.message, 'Error');
      this.spinner.hide();
      this.spinner.hide();
    });
  }

}
