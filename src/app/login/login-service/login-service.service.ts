import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Token} from '../../model/token';

// @ts-ignore
import * as data from '../../../assets/config.json';
import {log} from 'util';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private URL = data.apiUrlFolionet;

  constructor(private http: HttpClient) {
  }

  loginService(formValue) {
    try {
      const {login, password} = formValue;
      const HEADERS = new HttpHeaders().set('X-Api-Token', data.xapitoken);


      this.http.get<Token>(this.URL + 'token', {headers: HEADERS}).subscribe(res => {
          const token = res && res.data && res.data.token;
          console.log(token);


          const payload = new HttpParams()
            .set('login', login)
            .set('password', password)
            .set('_token', token);

          console.log(payload);

          let body = `login=${login}&password=${password}&_token=${token}`;

          this.http.post(this.URL + 'user/login', body, {headers: HEADERS}).subscribe(loginResponse => {
              console.log('loggin me');
              console.log(loginResponse);
              //If everything went ok
              localStorage.setItem('token', token);
              return true;
            },
            loginError => {
              console.log('login error', loginError);
              return loginError;
            });
        },
        tokenError => {
          console.log('login error', tokenError);
          return tokenError;
        });
    } catch (e) {
      throw e;
    }
  }

}
