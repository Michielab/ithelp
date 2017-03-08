import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { SessionService } from './session.service'
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  BASE_URL: string = 'http://localhost:3000/api';

  constructor(
    private http: Http,
    private SessionService: SessionService
  ) {

  }

  getUsers(lat,long) {
    let locationLat = lat;
    let locationLng = long;
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers});
    return this.http.get("http://localhost:3000/api/users?lat=" + locationLat + "&long=" + locationLng,options)
      .map((res) => res.json());
  }

  // getList() {
  //   let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.get(`${this.BASE_URL}/users`, options)
  //     .map((res) => res.json());
  // }

  // get(id) {
  //   let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
  //   let options = new RequestOptions({ headers: headers });
  //   return this.http.get(`${this.BASE_URL}/users/${id}`, options)
  //     .map((res) => res.json());
  // }
  //
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