import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login/login.component';
import {CreateAccountComponent} from './create-account/create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
