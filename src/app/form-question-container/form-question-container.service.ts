import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
// @ts-ignore
import * as data from '../../assets/config.json';
import {DynamicFormModel} from '../model/DynamicForm.model';
import {Utils} from '../util/Utils';



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

  saveValue(formValue, withFiles) {
    if (withFiles === 1) {
      const HEADERS = new HttpHeaders().set('X-Api-Token', data.xapitoken);
      const formData = new FormData();
      formData.append('selfie', formValue.selfie);
      formData.append('step', formValue.step);
      formData.append('view', formValue.view);
      formData.append('ticket', localStorage.getItem('ticket'));

      return this.http.post(this.URL + 'onboarding/save', formData, {headers: HEADERS});
    } else if (withFiles === 2) {
      const HEADERS = new HttpHeaders().set('X-Api-Token', data.xapitoken);
      const formData = new FormData();
      formData.append('front', formValue.front);
      formData.append('back', formValue.back);
      formData.append('step', formValue.step);
      formData.append('view', formValue.view);
      formData.append('ticket', localStorage.getItem('ticket'));

      return this.http.post(this.URL + 'onboarding/save', formData, {headers: HEADERS});
    } else if (withFiles === 3) {
      const HEADERS = new HttpHeaders().set('X-Api-Token', data.xapitoken);
      const formData = new FormData();
      formData.append('signature', formValue.signature);
      formData.append('step', formValue.step);
      formData.append('view', formValue.view);
      formData.append('ticket', localStorage.getItem('ticket'));

      return this.http.post(this.URL + 'onboarding/save', formData, {headers: HEADERS});
    } else {
      const HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        .set('X-Api-Token', data.xapitoken);
      formValue.ticket = localStorage.getItem('ticket');
      const payload = Utils.createHttpParams(formValue);
      return this.http.post(this.URL + 'onboarding/save', payload, {headers: HEADERS});
    }
  }

  backGoto(backFormData) {
    console.log(backFormData);
    const HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('X-Api-Token', data.xapitoken);
    backFormData.ticket = localStorage.getItem('ticket');
    const payload = Utils.createHttpParams(backFormData);
    return this.http.post(this.URL + 'onboarding/back', payload, {headers: HEADERS});
  }
}
