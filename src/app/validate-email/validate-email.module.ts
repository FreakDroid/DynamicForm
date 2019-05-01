import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateEmailComponent } from './validate-email.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faInbox, faTimes} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [ValidateEmailComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ]
})
export class ValidateEmailModule { }
