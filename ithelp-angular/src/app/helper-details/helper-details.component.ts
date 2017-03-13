import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-helper-details',
  templateUrl: './helper-details.component.html',
  styleUrls: ['./helper-details.component.css'],
  providers: [UserService]
})
export class HelperDetailsComponent implements OnInit {
	user: any = {};
  customer: any ={};
  field: any;

  newBooking = {
     date: '',
     starttime: '',
     mainSubject: '',
     subSubject: '',
     issue: '',
     message: '',
     customer: '',
     helper: ''
   };

  constructor(
  	private router: Router,
  	private route: ActivatedRoute,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    console.log("route", this.route)
  	this.route.params.subscribe(params => {
      this.getUserDetails(params['id']);
    });

  }

  getUserDetails(id) {

    // this.newBooking.customer = this.customer
    this.userService.get(id)
      .subscribe((user) => {
        this.user = user;
        console.log("user in getDetails: ", user)
      });
  }

  showField(field){
    this.field = field
  }


    booking() {
      this.customer = JSON.parse(localStorage.getItem("user"))
      this.newBooking.helper = this.user._id
      this.newBooking.customer = this.customer._id
    	this.userService.booking(this.newBooking)
        .subscribe(result => {
            if (result === true) {
                // login successful
                console.log('result ok', result);
                this.router.navigate(['/inbox']);
            } else {
            		console.log('result ko', result);
                  this.router.navigate(['/inbox']);
                // login failed
                // this.error = 'Username or password is incorrect';
            }
        });

    }

}
