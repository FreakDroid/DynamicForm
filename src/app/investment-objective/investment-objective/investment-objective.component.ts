import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-investment-objective',
  templateUrl: './investment-objective.component.html',
  styleUrls: ['./investment-objective.component.scss']
})
export class InvestmentObjectiveComponent implements OnInit {
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
    this.router.navigate(['/create-account']);
  }

  goback() {
    this.router.navigate(['/invest-objective']);
  }
}
