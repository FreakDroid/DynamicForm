import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import * as data from '../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  private headers;
  private URL = data.apiUrlFolionet;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }

  login(data) {
    const body = new URLSearchParams();
    body.set('X-Api-Token', data.xapitoken);
    this.http.post(this.URL + 'token?', body, this.headers).subscribe(res => {
      console.log(res);
      return res;
    });
  }
}
