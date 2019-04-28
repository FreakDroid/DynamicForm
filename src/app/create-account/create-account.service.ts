import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// @ts-ignore
import * as data from '../../assets/config.json';
import {Token} from '../model/token.model';
import {Utils} from '../util/Utils';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {

  private headers;
  private URL = data.apiUrlFolionet;

  constructor(private http: HttpClient) {
  }

  register(formValue) {
    const HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('X-Api-Token', data.xapitoken);

    // Hardcoded for now
    formValue.hearAboutFolionet = 1;
    formValue.investmentExperience = 1;
    formValue.investmentObjective = 1;
    formValue._toke = localStorage.getItem('token');
    const payload = Utils.createHttpParams(formValue);
    console.log(payload);

    return this.http.post(this.URL + 'user/register', payload, {headers: HEADERS});
  }
}
