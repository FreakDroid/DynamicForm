import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {CreateAccountComponent} from './create-account/create-account/create-account.component';
import {FormQuestionContainerComponent} from './form-question-container/form-question-container/form-question-container.component';

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
    component: FormQuestionContainerComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
