import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// @ts-ignore
import * as data from '../../assets/config.json';
import {Utils} from '../util/Utils';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = data.apiUrlFolionet;

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) { }

  public validateToken(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    // Check whether the token is expired and return
    // true or false
    return false;
  }

  public validateTicket(): boolean {
    const ticket = localStorage.getItem('ticket');
    if (ticket) {
      const HEADERS = new HttpHeaders().set('X-Api-Token', data.xapitoken);
      const payload = Utils.createHttpParams({ticket});
      this.http.post(this.URL + 'user/validate?', payload, {headers: HEADERS}).subscribe(res => {
        this.loggedIn.next(true);
        return true;
      },
        error => {
          this.loggedIn.next(false);
          return false;
      });
    }
    // Check whether the token is expired and return
    // true or false
    this.loggedIn.next(false);
    return false;
  }
}
