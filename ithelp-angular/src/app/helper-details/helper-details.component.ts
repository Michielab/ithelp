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
  costumer: any ={};
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
  ) {}

  ngOnInit() {
    console.log(this.route)
  	this.route.params.subscribe(params => {
      this.getUserDetails(params['id']);
    });

    this.costumer = JSON.parse(localStorage.getItem("user"))
    let user = JSON.parse(localStorage.getItem("user"))
    this.newBooking.customer = this.costumer._id
    this.newBooking.helper = this.user._id



    console.log("On ngInit",this.costumer.name,this.costumer._id)

    console.log("----------")
    console.log("customer",this.newBooking.customer)
    console.log("helper",this.newBooking.helper)
    console.log("----------")

  }

  getUserDetails(id) {

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
      this.newBooking.helper = this.user._id
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
