import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentObjectiveComponent } from './investment-objective/investment-objective.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbRadioGroup} from '@ng-bootstrap/ng-bootstrap';

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
    NgbRadioGroup
  ]
})
export class InvestmentObjectiveModule { }
