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
  booking: any = {};

  constructor(
  private session: SessionService,
  private router:  Router,
  private userService: UserService) {
      this.user = JSON.parse(localStorage.getItem("user"));
  }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"))
    this.userService.inbox(user._id)
        .subscribe((response) => {
            this.booking = response;
            console.log(this.booking)
            console.log(this.booking.bookingCustomer[0].mainSubject)
        })


  }
}
