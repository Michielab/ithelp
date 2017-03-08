import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isAuth: boolean;
  user: Object;

  constructor(
    private session: SessionService,
    private router:  Router
  ) {
    this.session.isAuth
        .subscribe((isAuth: boolean) => {
        // user will be false if logged out
        // or user object if logged in.
          this.isAuth = isAuth;
        });
    if (this.session.token) {
      this.isAuth = true;
    } else {
      this.isAuth = false;
    }
  }

  ngOnInit() {
    console.log(this.session)
    this.user = JSON.parse(localStorage.getItem("user"))

  }


  }
