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
  user: Object;
  uploader: FileUploader = new FileUploader({
    url: `http://localhost:3000/edit`,
    authToken: `JWT ${this.session.token}`
  });

  newUser = {
    _id: '',
    name: '',
    surname: '',
    email: '',
    address: '',
    role: '',
    lat: 0,
    long: 0,
    password: ''
  };

  feedback: string;

  isAuth: boolean;


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

    this.user = JSON.parse(localStorage.getItem("user"))
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(this.newUser._id)
    this.newUser._id = user._id
    console.log(this.newUser._id)
    this.uploader.onSuccessItem = (item, user) => {
      localStorage.removeItem("user")
      localStorage.setItem("user", user)

      // this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

  }

  submit() {
    console.log('profile')
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newUser.name);
      form.append('surname', this.newUser.surname);
      form.append('email', this.newUser.email);
      form.append('address', this.newUser.address);
      form.append('role', this.newUser.role);
      form.append('lat', this.newUser.lat);
      form.append('long', this.newUser.long);
      form.append('password', this.newUser.password);
      form.append('_id', this.newUser._id);
        console.log('profile2')
    };

    this.uploader.uploadAll();
      console.log('profile3')
  }


}
