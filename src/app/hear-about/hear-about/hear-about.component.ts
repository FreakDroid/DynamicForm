import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hear-about',
  templateUrl: './hear-about.component.html',
  styleUrls: ['./hear-about.component.scss']
})
export class HearAboutComponent implements OnInit {

  hearAboutUsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.hearAboutUsForm = this.formBuilder.group({
      hearAboutUs: new FormControl(''),
    });
  }

  selected(e) {
    console.log(e);
    localStorage.setItem('hearAboutFolionet', e);
    this.router.navigate(['/experience']);
  }
  goback() {
    this.router.navigate(['']);
  }
}
