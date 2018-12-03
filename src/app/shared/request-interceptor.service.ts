import { Injectable, Injector } from '@angular/core';
import { throwError as observableThrowError, Observable, BehaviorSubject } from 'rxjs';

import { take, filter, catchError, switchMap, finalize } from 'rxjs/operators';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";
import { TokenService } from './token.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {
  public token: string;

  constructor(private injector: Injector, public cookie: CookieService) { }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { token: token } })
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpEvent<any> | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    
    if(this.token == null){
      this.getAuthToken();
      
      //this.token = this.cookie.get('token');
    }

    console.log(this.token);

    return next.handle(this.addToken(req, this.token)).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 400:
              return observableThrowError(error);
            case 401:
              return this.handleError401(req, next);
            default:
              return observableThrowError(error);
          }
        } else {
          return observableThrowError(error);
        }
      }));
  }

  handleError401(req: HttpRequest<any>, next: HttpHandler) {
    this.getAuthToken();
    //this.token = this.cookie.get('token');
    
    return next.handle(this.addToken(req, this.token));
  }

  getAuthToken(): void{
    const tokenService = this.injector.get(TokenService);

    const email = "vena.kurnia.sari@gmail.com";
    const password = "123456";
    
    tokenService.getToken(email, password).subscribe(data => {
      //this.cookie.set('token', data.token);
      this.token = data.token;
      console.log("token : ", this.token);
    });
  }

}
