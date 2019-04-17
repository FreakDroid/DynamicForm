import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl = 'http://www.google.com'

  constructor(private http: HttpClient) {

  }


  // login the USER
  login(user) {
    this.http.post(this.baseUrl + '/login', user).subscribe( (res) => {
      console.log(res);
      }
    );
  }
}
