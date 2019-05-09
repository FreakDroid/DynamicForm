import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearAboutComponent } from './hear-about/hear-about.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgbModule, NgbRadioGroup} from '@ng-bootstrap/ng-bootstrap';
import {MemoryDataService} from '../memory-data/memory-data.service';

@NgModule({
  declarations: [HearAboutComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    NgbRadioGroup, MemoryDataService
  ]
})
export class HearAboutModule { }
