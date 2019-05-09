import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentObjectiveComponent } from './investment-objective/investment-objective.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbRadioGroup} from '@ng-bootstrap/ng-bootstrap';
import {MemoryDataService} from '../memory-data/memory-data.service';
import {CreateAccountService} from '../create-account/create-account.service';

@NgModule({
  declarations: [InvestmentObjectiveComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    NgbRadioGroup,
    MemoryDataService,
    CreateAccountService
  ]
})
export class InvestmentObjectiveModule { }
