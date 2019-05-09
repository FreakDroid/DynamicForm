import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbRadioGroup} from '@ng-bootstrap/ng-bootstrap';
import {MemoryDataService} from '../memory-data/memory-data.service';

@NgModule({
  declarations: [ExperienceComponent],
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
export class ExperienceModule { }
