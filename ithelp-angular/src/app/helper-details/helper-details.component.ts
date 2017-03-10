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
  field: any;
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

  alert(){
    console.log("hello")
    alert("Choose a field first")
  }

}
