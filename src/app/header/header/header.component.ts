import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('Fading', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', animate('800ms ease-out')),
      transition(':leave', animate('800ms ease-in')),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  visible = false;
  isLoggedIn$: Observable<boolean>;

  constructor(private auth: AuthService, private router: Router, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  showMenu() {
    console.log('clicking');
    this.visible = !this.visible;
  }

  logout() {
    this.spinner.show();
    this.visible = false;
    this.auth.cleanForLogOut();
    this.router.navigate(['']);
    this.spinner.hide();
  }
}
