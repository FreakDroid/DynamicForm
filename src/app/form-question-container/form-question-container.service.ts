import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// @ts-ignore
import * as data from '../../assets/config.json';
import {DynamicFormModel} from '../model/DynamicForm.model';



@Injectable({
  providedIn: 'root'
})
export class FormQuestionContainerService {

  private headers;
  private URL = data.apiUrlFolionet;

  constructor(private http: HttpClient) {

  }

  checkStep() {

    const HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('X-Api-Token', data.xapitoken);
    const payload = new HttpParams()
      .set('ticket', localStorage.getItem('ticket'));
    return this.http.post<DynamicFormModel>(this.URL + 'onboarding/check', payload, {headers: HEADERS});
  }
}
