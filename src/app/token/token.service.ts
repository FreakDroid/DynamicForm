import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

// @ts-ignore
import * as data from '../../assets/config.json';
import {Token} from '../model/token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private URL = data.apiUrlFolionet;

  constructor(private http: HttpClient) { }

  getToken() {
    const HEADERS = new HttpHeaders().set('X-Api-Token', data.xapitoken);
    return this.http.get<Token>(this.URL + 'token', {headers: HEADERS});
  }
}
