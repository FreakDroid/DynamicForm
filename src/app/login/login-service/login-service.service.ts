import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import * as data from '../../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private headers;
  private URL = data.apiUrlFolionet;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }


  login(data: any) {
    const body = new URLSearchParams();
    body.set('X-Api-Token', data.xapitoken);
    this.http.post(this.URL + 'token', body, this.headers).subscribe(res => {
      console.log(res);
      return res;
    });
  }
}
