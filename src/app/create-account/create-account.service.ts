import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// @ts-ignore
import * as data from '../../assets/config.json';
import {Token} from '../model/token.model';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  private headers;
  private URL = data.apiUrlFolionet;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }

  register(formValue) {
    const {userName, email, password, confirmPassword, firstName, middleName, lastName} = formValue;
    console.log(userName, email, password, confirmPassword, firstName, middleName, lastName);
    const HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('X-Api-Token', data.xapitoken);

    const payload = new HttpParams()
      .set('email', email)
      .set('username', userName)
      .set('password', password)
      .set('firstName', firstName)
      .set('middleName', middleName)
      .set('lastName', lastName)
      .set('hearAboutFolionet', '1')
      .set('investmentExperience', '1')
      .set('investmentObjective', '1')
      .set('password_confirmation', confirmPassword)
      .set('_token', localStorage.getItem('token.model.ts'));

    return this.http.post(this.URL + 'user/register', payload, {headers: HEADERS});
  }
}
