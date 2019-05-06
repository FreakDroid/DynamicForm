import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {CreateAccountComponent} from './create-account/create-account/create-account.component';
import {FormQuestionContainerComponent} from './form-question-container/form-question-container/form-question-container.component';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';
import {ValidateEmailComponent} from './validate-email/validate-email.component';

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
    path: 'validate',
    component:  ValidateEmailComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
