import { Injectable } from '@angular/core';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import {map, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService, public router: Router) { }


  canActivate(): boolean {
    if (!this.auth.validateTicket() && !this.auth.validateToken()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }


}
