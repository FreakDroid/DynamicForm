import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  hearAboutUsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.hearAboutUsForm = this.formBuilder.group({
      hearAboutUs: new FormControl(''),
    });
  }

  selected(e) {
    console.log(e);
    localStorage.setItem('experience', e);
    this.router.navigate(['/invest-objective']);
  }

  goback() {
    this.router.navigate(['/experience']);
  }
}
