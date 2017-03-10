import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { SessionService } from '../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/api/users/`,
    authToken: `JWT ${this.session.token}`
  });

  newUser = {
    name: '',
    surname: '',
    phoneNumber: ''

  };

  feedback: string;

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

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newUser.name);
      form.append('surname', this.newUser.surname);
      form.append('phoneNumber', this.newUser.phoneNumber);

    };

    this.uploader.uploadAll();
  }


}
