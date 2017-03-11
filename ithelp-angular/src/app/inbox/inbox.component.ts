import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';




@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
  providers: [UserService]
})
export class InboxComponent implements OnInit {
  user: Object;

  constructor(
  private session: SessionService,
  private router:  Router,
  private userService: UserService) {
      this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    console.log(this.user)
    console.log(localStorage)


    this.userService.inbox()
        .subscribe(result => {
            if (result === true) {
                // login successful
                console.log('result ok', result);

            } else {
                console.log('result ko', result);
              
                // login failed
                // this.error = 'Username or password is incorrect';
            }
        });

    }

  }
