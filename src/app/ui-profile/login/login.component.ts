import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { UserService } from '../../shared/user.service';
import { TokenService } from '../../shared/token.service';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-profile-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;
  hash: any;

  constructor(private tokenService: TokenService, private userService: UserService, public router: Router, public cookie: CookieService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    const type = "email";
    this.token = this.cookie.get('token');

    this.hash = Md5.hashStr(password);
    this.hash = Md5.hashStr(this.hash);

    this.userService.getLogin(email, this.hash, type, this.token).subscribe(data => {
      console.log(data.data);
    },
      err => {
        console.log(err.error.error);
      }
    );
  }

}
