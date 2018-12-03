import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UiHomeModule } from './ui-home/ui-home.module';
import { UiProfileModule } from './ui-profile/ui-profile.module';
import { UiListModule } from './ui-list/ui-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';

import { RequestInterceptorService } from './shared/request-interceptor.service';
import { TokenService } from './shared/token.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiHomeModule,
    UiProfileModule,
    UiListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true },
    TokenService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
