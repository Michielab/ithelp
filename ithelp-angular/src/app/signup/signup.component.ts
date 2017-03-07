import { Component, OnInit} from '@angular/core';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';


declare var google: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser = {
    name: '',
    surname: '',
    email: '',
    address: '',
    role: '',
    lat: 0,
    long: 0,
    password: ''
  };

  user: any;
  error: string;



  constructor(
  	private session: SessionService,
    private router: Router

  ) {}

  ngOnInit() {
    let input = document.getElementById('searchTextField');
    let autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener("place_changed", ()=> {

    this.newUser.lat =  autocomplete.getPlace().geometry.location.lat()
    this.newUser.long   = autocomplete.getPlace().geometry.location.lng();

    })


  }

  signup() {
  	this.session.signup(this.newUser)
      .subscribe(result => {
          if (result === true) {
              // login successful
              console.log('result ok', result);
              this.router.navigate(['/phone']);
          } else {
          		console.log('result ko', result);
              // login failed
              // this.error = 'Username or password is incorrect';
          }
      });
  }

}
