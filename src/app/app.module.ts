import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faInbox, faTimes} from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountModule } from './create-account/create-account.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { FormQuestionContainerModule} from './form-question-container/form-question-container.module';
import { ValidateEmailModule } from './validate-email/validate-email.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import {RouterModule} from '@angular/router';
import { WaitingForApprovalModule } from './waiting-for-approval/waiting-for-approval.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateAccountModule,
    HeaderModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    LoginModule,
    DynamicFormModule,
    FormQuestionContainerModule,
    ValidateEmailModule,
    WaitingForApprovalModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faTimes);
    library.add(faInbox);
  }
}
