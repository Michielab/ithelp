import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { SessionService } from './session.service'
import 'rxjs/add/operator/map';

@Injectable()
export class PhoneService {
  BASE_URL: string = 'mongodb://heroku_tz10h942:fplsc61l4lauj3h1thp4ia4voh@ds133260.mlab.com:33260/heroku_tz10h942/api';

  constructor(
    private http: Http,
    private SessionService: SessionService
  ) {

  }

  getList() {

    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/phones`, options)
      .map((res) => res.json());
  }

  get(id) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.BASE_URL}/phones/${id}`, options)
      .map((res) => res.json());
  }

  edit(phone) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.BASE_URL}/phones/${phone.id}`, phone, options )
      .map((res) => res.json());
  }

  remove(id) {
    let headers = new Headers({ 'Authorization': 'JWT ' + this.SessionService.token });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${this.BASE_URL}/phones/${id}`, options)
      .map((res) => res.json());
  }
}
