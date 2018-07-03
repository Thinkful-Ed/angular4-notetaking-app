import { NgModule } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BaseService } from '../_services/base.service';

@Injectable()
export class AuthService {
  helper = new JwtHelperService();

  constructor(private http: HttpClient,
    private router: Router,
    private baseService: BaseService) { }

  public isAuthenticated(): boolean {
    const token = window.localStorage.getItem('token');
    return token && !this.helper.isTokenExpired(token);
  }

  public login(credentials) {
    console.log('login attempt', credentials);

    this.http.post(this.baseService.baseUrl + '/login', credentials).subscribe(data => {
      console.log('login attempt', data);
      if (data) {
        window.localStorage.setItem('token', data['authToken']);
        console.log('token in ', window.localStorage.getItem('token'));
        this.router.navigate(['/notes']);
      }
    }, error => {
      console.log(error);
      if (error.status === 401) {
        alert('Credentials are not matching: Username or Email is not correct');
      }
      if (error.status === 400) {
        alert('Username or Email is missing');
      }
    });
  }

  public logout() {
    window.localStorage.removeItem('token');
  }

  public register(user) {
    this.http.post(this.baseService.baseUrl + '/users', user).subscribe(data => {
      console.log('new user! ', user.fullname);
      this.login(user);
    }, error => {
      console.log(error);
      if (error.status === 422 || error.status === 400) {
        alert(error.error.message);
      }
    });
  }
}
