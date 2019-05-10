import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {CreateAccountComponent} from './create-account/create-account/create-account.component';
import {FormQuestionContainerComponent} from './form-question-container/form-question-container/form-question-container.component';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';
import {ValidateEmailComponent} from './validate-email/validate-email.component';
import {WaitingForApprovalComponent} from './waiting-for-approval/waiting-for-approval/waiting-for-approval.component';
import {HearAboutComponent} from './hear-about/hear-about/hear-about.component';
import {ExperienceComponent} from './experience/experience/experience.component';
import {InvestmentObjectiveComponent} from './investment-objective/investment-objective/investment-objective.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  {
    path: 'dynamic',
    component: FormQuestionContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dynamic/:step/:view',
    component: FormQuestionContainerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'email_not_verify',
    component:  ValidateEmailComponent
  },
  {
    path: 'waiting_for_approval',
    component:  WaitingForApprovalComponent
  },
  {
    path: 'hear-about-us',
    component: HearAboutComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'investment-objective',
    component: InvestmentObjectiveComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
