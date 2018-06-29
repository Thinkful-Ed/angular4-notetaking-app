
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export class Login {
  username: string;
  password: string;
}

export class User {
  username: string;
  password: string;
  fullname: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = new Login();
  user = new User();

  constructor(private auth: AuthService) { }

  onLogin(credentials) {
    this.auth.login(credentials.value);
  }

  onRegister(user) {
    this.auth.register(user.value);
  }

  onLogout() {
    this.auth.logout();
  }
  ngOnInit() {
  }

}
