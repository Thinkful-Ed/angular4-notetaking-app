import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';



@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router){}
  helper = new JwtHelperService();

  public isAuthenticated(): boolean {
   const token = localStorage.getItem('token');
   // Check whether the token is expired and return
   // true or false
   console.log("token:", localStorage.getItem('token'));
   return !this.helper.isTokenExpired(token);
 }

  public login(credentials) {
    this.http.post('http://localhost:8080/api/login', credentials).subscribe(data => {
      if(data){
      localStorage.setItem('token', data.authToken);
      console.log("token in ", localStorage.getItem('token'));
      this.router.navigate(['/notes']);
      }
      error => console.log(error);
  });
  public logout() {
    localStorage.removeItem('token');
  }

  public register(user) {
    this.http.post('http://localhost:8080/api/users', user).subscribe(data => {
      console.log("new user! ", user.fullname)
      error => console.log(error);
  });
  }


}
