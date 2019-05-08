import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-waiting-for-approval',
  templateUrl: './waiting-for-approval.component.html',
  styleUrls: ['./waiting-for-approval.component.scss']
})
export class WaitingForApprovalComponent implements OnInit {

  constructor(private auth: AuthService, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.spinner.show();
    this.auth.cleanForLogOut();
    this.router.navigate(['']);
    this.spinner.hide();
  }

}
