import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { SessionService } from './session.service'
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  BASE_URL: string = 'https://nerdalert.herokuapp.com/api';


  constructor(
    private http: Http,
    private SessionService: SessionService
  ) {

  }

  getUsers(lat,long) {
    let locationLat = lat;
    let locationLng = long;
    // let filter = filters
    // + "&filters=" + filter
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers});
    return this.http.get("https://nerdalert.herokuapp.com/api/users?lat=" + locationLat + "&long=" + locationLng ,options)

      .map((res) => res.json());
  }

  get(id) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/users/${id}`, options)
      .map((res) => res.json());
  }

  booking(booking) {
    return this.http.post("https://nerdalert.herokuapp.com/booking", booking)

      .map((response) => response.json())
  }

  confirmBooking(accept, bookingId) {
    console.log(accept, bookingId)
    return this.http.post(`${this.BASE_URL}/inbox/${bookingId}`,accept)
      .map((response) => response.json())
  }

  declineBooking(decline, bookingId) {
    return this.http.post(`${this.BASE_URL}/inbox/${bookingId}`,decline)
      .map((response) => response.json())
  }

  createReview(review) {
    return this.http.post(`${this.BASE_URL}/reviews`,review)
      .map((response) => response.json())
  }

  getReviews(userId) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.BASE_URL}/reviews/${userId}`,options)
      .map((response) => response.json())
  }

  getReview(reviewId) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.BASE_URL}/reviews/${reviewId}`,options)
      .map((response) => response.json())
  }

  inbox(userId) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/inbox/${userId}`, options)
      .map((response) => response.json())
  }



  // edit(user) {
  //   let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.put(`${this.BASE_URL}/users/${user.id}`, user, options )
  //     .map((res) => res.json());
  // }
  //
  // remove(id) {
  //   let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.delete(`${this.BASE_URL}/users/${id}`, options)
  //     .map((res) => res.json());
  // }
}
