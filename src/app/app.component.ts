import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './shared/token.service';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mbefree';

  lang: string;
  cur: string;

  constructor(private tokenService: TokenService, private userService: UserService, public cookie: CookieService) { }

  ngOnInit(): void {
    this.userService.getLocation().subscribe(data => {
      this.lang = data.data.lang;
      this.cur = data.data.currency;
      this.cookie.set('lang', this.lang);
      this.cookie.set('currency', this.cur);
      console.log(data);
    })
    
    // const email = "vena.kurnia.sari@gmail.com";
    // const password = "123456";
    
    // this.tokenService.getToken(email, password).subscribe(data => {
    //   this.token = data.token;
    //   this.cookie.set('token', this.token);
      
      // this.tokenService.getLocation().subscribe(data => {
      //   this.lang = data.data.lang;
      //   this.cur = data.data.currency;
      //   this.cookie.set('lang', this.lang);
      //   this.cookie.set('currency', this.cur);
      //   console.log(data);
      // });
    // });
  }

}
