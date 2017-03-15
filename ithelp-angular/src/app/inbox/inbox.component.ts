import { Component, OnInit } from '@angular/core';
import { FileUploader } from "ng2-file-upload";
import { SessionService } from '../session.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NewDatePipe} from "../pipes/new-date.pipe"

// import * as moment from ‘moment’;


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css'],
  providers: [UserService]
})
export class InboxComponent implements OnInit {
  user: Object;
  booking: any = {};
  today: any;

  acceptHelperBooking = {
    acceptedHelper: true,
    reply: '',
    hours: 0
   };

   acceptCustomerBooking = {
     acceptedCustomer: true,
     acceptedHelper: true,

    };

   rejectBooking = {
     declined: true
    };

newReview = {
  rating: '',
  evaluation: '',
  subject: '',
  customer: '',
  helper: '',
  booking: ''
}

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
    this.today = new Date();
    console.log(this.today)
    console.log(typeof(this.today))
  }

  confirmHelperBooking(id) {
    this.userService.confirmBooking(this.acceptHelperBooking, id)
      .subscribe(result => {
          if (result === true) {
              // login successful
              console.log('result ok', result);
              window.location.reload()
          } else {
              console.log('result ko', result);
              window.location.reload()

              // login failed
              // this.error = 'Username or password is incorrect';
          }
      });
  }

  confirmCustomerBooking(id) {
    this.userService.confirmBooking(this.acceptCustomerBooking, id)
      .subscribe(result => {
          if (result === true) {
              // login successful
              console.log('result ok', result);
              window.location.reload()
          } else {
              console.log('result ko', result);
              window.location.reload()

              // login failed
              // this.error = 'Username or password is incorrect';
          }
      });
  }

  declineBooking(id) {
    console.log(id)
    this.userService.declineBooking(this.rejectBooking, id)
      .subscribe(result => {
          if (result === true) {
              // login successful
              console.log('result ok', result);
              window.location.reload()
          } else {
              console.log('result ko', result);
              window.location.reload()

              // login failed
              // this.error = 'Username or password is incorrect';
          }
      });
  }

  createReview(helperId, bookingId, mainSubject) {
    let user = JSON.parse(localStorage.getItem("user"))
    this.newReview.customer = user._id
    this.newReview.helper = helperId
    this.newReview.booking = bookingId
    this.newReview.subject = mainSubject
    this.userService.createReview(this.newReview)
      .subscribe(result => {
          if (result === true) {
              // login successful
              console.log('result ok', result);
              window.location.reload()
          } else {
              console.log('result ko', result);
              window.location.reload()
              // login failed
              // this.error = 'Username or password is incorrect';
          }
      });
  }


  }
