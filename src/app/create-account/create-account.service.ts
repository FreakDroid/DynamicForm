import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import * as data from '../../assets/config.json';
import {Token} from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  private headers;
  private URL = data.apiUrlFolionet;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }

  async login(formValue) {
    try {
      const HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('X-Api-Token', data.xapitoken);


      const token = await this.http.get<Token>(this.URL + 'token', {headers: HEADERS}).toPromise();
      console.log(token.data.token);

      
    } catch (e) {
      throw e;
    }
  }
}
