import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faChevronCircleLeft, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import {LoginRoutingModule} from './login-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginServiceService} from './login-service/login-service.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    LoginRoutingModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    LoginRoutingModule
  ],
  providers: [LoginServiceService]
})
export class LoginModule {
  constructor() {
    library.add(faExclamationCircle, faChevronCircleLeft);
  }
}
