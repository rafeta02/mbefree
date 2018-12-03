import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, ResponData, ResponLang } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //retrieve language n currency
  getLocation() {
    return this.http.get<ResponLang>('/posts/getlocation');
  }

  getLogin(email, password, type, token) {
    const body = {
      email: email,
      password: password,
      type: type
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'token' : token
      })
    }
    return this.http.post<ResponData>('/posts/loginuser', body, httpOptions);
  }
}
