import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const AUTH_API = `${environment.API_BOOK_STORE}/auth/`;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {
  }

  getUserList(): Observable<any> {
    return this.http.get(AUTH_API);
  }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      phone: user.phone,
      address: user.address
    }, httpOptions);
  }

  checkPassword(credentials): Observable<any> {
    console.log(credentials);
    return this.http.post(AUTH_API + 'check-password', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  changePassword(credentials): Observable<any> {
    console.log(credentials);
    return this.http.post(AUTH_API + 'change-password', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  changeProfile(user): Observable<any> {
    return this.http.post(AUTH_API + 'change-profile', {
      username: user.username,
      email: user.email,
      password: user.password,
      phone: user.phone,
      address: user.address
    }, httpOptions);
  }

  deleteUser(idUser) {
    return this.http.delete(AUTH_API + idUser, httpOptions);
  }
}
