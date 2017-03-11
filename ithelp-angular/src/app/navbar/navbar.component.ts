import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth: boolean;
  user: Object = {};


  constructor(
  	private session: SessionService,
  	private router:  Router
  ) {
    this.user = JSON.parse(localStorage.getItem("user"))
    console.log("USER",this.user)
    console.log(this.session)
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
    console.log("This is the user on navbar before parse",this.user)
    this.user = JSON.parse(localStorage.getItem("user"))
    console.log("This is the user in the navbar after parse",this.user)

  }

  logout() {
  	this.session.logout();
  	// this.router.navigate(['/login']);
  }
}
