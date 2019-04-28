import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Token} from '../../model/token.model';

// @ts-ignore
import * as data from '../../../assets/config.json';
import {Utils} from '../../util/Utils';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private URL = data.apiUrlFolionet;

  constructor(private http: HttpClient) {
  }

  loginService(formValue) {
    const HEADERS = new HttpHeaders().set('X-Api-Token', data.xapitoken);

    const payload = Utils.createHttpParams(formValue);
    formValue._toke = localStorage.getItem('token');
    return this.http.post(this.URL + 'user/login', payload, {headers: HEADERS});
  }
}
