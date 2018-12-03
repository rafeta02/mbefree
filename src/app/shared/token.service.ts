import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Login, ResponData, ResponLang } from './interfaces';
import { CookieService } from 'ngx-cookie-service';
//import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient, public cookie: CookieService, handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  //retrieve token
  getToken(email, password) {
    return this.http.post<Login>('/posts/auth/login', {
      email, password
    });
  }

  // public isAuthenticated(): boolean {
  //   const token = this.cookie.get('token');

  //   return tokenNotExpired(null, token);
  // }
}
