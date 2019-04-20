import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import * as data from '../../../assets/config.json';
import {log} from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private URL = data.apiUrlFolionet;

  constructor(private http: HttpClient) {
  }

  login() {
    const HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('X-Api-Token', data.xapitoken);
    this.http.get(this.URL + 'token', {headers: HEADERS}).subscribe(res => {
      console.log(res);
      return res;
    });
  }
}
