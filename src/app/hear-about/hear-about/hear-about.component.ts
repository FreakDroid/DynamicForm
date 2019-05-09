import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MemoryDataService} from '../../memory-data/memory-data.service';
import {CreateAccountModel} from '../../model/createAccount.model';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-hear-about',
  templateUrl: './hear-about.component.html',
  styleUrls: ['./hear-about.component.scss']
})
export class HearAboutComponent implements OnInit {

  hearAboutUsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private memoryService: MemoryDataService,
              private spinner: NgxSpinnerService) { }

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
    console.log(e);
    this.spinner.show();
    let createAccount: CreateAccountModel = this.memoryService.getCreateAccountState;
    createAccount.hearAboutFolionet = e;
    this.memoryService.saveCreateAccountState(createAccount);
    this.spinner.hide();
    this.router.navigate(['/experience']);
  }
  goback() {
    this.router.navigate(['/create-account']);
  }
}
