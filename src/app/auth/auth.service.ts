
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  // first we add the helper service inside the class
  helper = new JwtHelperService();
  // then update the constructor
  constructor(private http: HttpClient, private router: Router) { }

  // then we add a function that tests for Authentication
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    console.log('token:', localStorage.getItem('token'));
    return !this.helper.isTokenExpired(token);
  }

  // Then we add the functions that allow users to register, authenticate, and logout
  public login(credentials) {
    console.log('login attempt', credentials);

    this.http.post('https://notefulapp.herokuapp.com/api/login', credentials).subscribe(data => {
      console.log('login attempt', data);
      if (data) {
        localStorage.setItem('token', data['authToken']);
        console.log('token in ', localStorage.getItem('token'));
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
    localStorage.removeItem('token');
  }

  public register(user) {
    this.http.post(' https://notefulapp.herokuapp.com/api/users', user).subscribe(data => {
      console.log('new user! ', user.fullname);
      if (data) {
        localStorage.setItem('token', data['authToken']);
        console.log('token in ', localStorage.getItem('token'));
        this.router.navigate(['/notes']);
      }
    }, error => {
      console.log(error);
      if (error.status === 422 || error.status === 400) {
        alert(error.error.message);
      }
    });
  }

}
