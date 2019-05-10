import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CreateAccountModel} from '../../model/createAccount.model';
import {MemoryDataService} from '../../memory-data/memory-data.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  hearAboutUsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private memoryService: MemoryDataService,
              private spinner: NgxSpinnerService,) { }

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
    createAccount.investmentExperience = e;
    this.memoryService.saveCreateAccountState(createAccount);
    this.spinner.hide();
    this.router.navigate(['/investment-objective']);
  }

  goback() {
    this.router.navigate(['/hear-about-us']);
  }
}
