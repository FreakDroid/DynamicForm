import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {MemoryDataService} from '../../memory-data/memory-data.service';
import {CreateAccountModel} from '../../model/createAccount.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {CreateAccountService} from '../../create-account/create-account.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-investment-objective',
  templateUrl: './investment-objective.component.html',
  styleUrls: ['./investment-objective.component.scss']
})
export class InvestmentObjectiveComponent implements OnInit {
  hearAboutUsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private memoryService: MemoryDataService,
              private spinner: NgxSpinnerService, private createAccountService: CreateAccountService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.hearAboutUsForm = this.formBuilder.group({
      hearAboutUs: new FormControl(''),
    });

    let createAccount: CreateAccountModel = this.memoryService.getCreateAccountState;
    if (!createAccount) {
      this.router.navigate(['/create-account']);
    } else{
      const investmentExperience = createAccount.investmentExperience;
      //this.hearAboutUsForm.hearAboutUs = (investmentExperience = 0) ? 0 : investmentExperience;
    }
  }

  selected(e) {
    localStorage.setItem('investment', e);
    let createAccount: CreateAccountModel = this.memoryService.getCreateAccountState;
    createAccount.investmentExperience = e;
    this.memoryService.saveCreateAccountState(createAccount);

    this.spinner.show();
    this.createAccountService.register(JSON.parse(JSON.stringify(createAccount))).subscribe(resCreateAccount => {
        console.log(resCreateAccount);
        // @ts-ignore
        const ticket = resCreateAccount && resCreateAccount.data.user.ticket;
        localStorage.setItem('ticket', ticket);
        // You should redirect to dynamic form.
        this.spinner.hide();
        this.router.navigate(['/email_not_verify']);
      },
      errorCreateAccount => {
        console.log('error creating account', errorCreateAccount);
        this.toastr.error(errorCreateAccount.error.message, 'Error');
        this.spinner.hide();
      });
  }

  goback() {
    this.router.navigate(['/experience']);
  }
}
