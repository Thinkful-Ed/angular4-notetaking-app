import { NgModule } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router){}
  helper = new JwtHelperService();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public isAuthenticated(): boolean {
   const token = localStorage.getItem('token');
   console.log("token:", localStorage.getItem('token'));
   return !this.helper.isTokenExpired(token);
 }

  public login(credentials) {
    this.http.post('http://localhost:8080/api/login', credentials).subscribe(data => {
      console.log(data);
      if(data){
      localStorage.setItem('token', data['authToken']);
      console.log("token in ", localStorage.getItem('token'));
      this.router.navigate(['/notes']);
      }

    }, error => {
      console.log(error);
      if (error.status == 401) {
        alert("Credentials are not matching: Username or Email is not correct");
      }
      if (error.status == 400) {
        alert("Username or Email is missing");
      }

    });
  }

  public logout() {
    localStorage.removeItem('token');
  }

  public register(user) {
    this.http.post('http://localhost:8080/api/users', user).subscribe(data => {
      console.log("new user! ", user.fullname)
      if(data){
        localStorage.setItem('token', data['authToken']);
        console.log("token in ", localStorage.getItem('token'));
        this.router.navigate(['/notes']);
      }
    }, error => {
      console.log(error);
      if (error.status == 422 || error.status == 400)
        alert(error.error.message);
    });
  }

}
