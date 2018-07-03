import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import 'rxjs/Rx';
import { BaseService } from '../_services/base.service';
describe('AuthService', () => {
  let httpMock;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseService, AuthService],
      imports: [ HttpClientModule, HttpClientTestingModule, RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
    });
  });

  beforeEach(() => {
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should logged in', inject([AuthService, HttpTestingController, HttpClient], (service: AuthService, http: HttpClient) => {
    const mockuser = { username: 'song',password: 'Song123#'};

    http.post('http://localhost:8080/api/login', mockuser).subscribe( data => {
        expect(data.hasOwnProperty('username')).toBeTruthy();
        expect(data.hasOwnProperty('password')).toBeTruthy();

        expect(data['username']).toBe(mockuser.username);
        expect(data['password']).toBe(mockuser.password);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/login');
    req.flush(mockuser);
    httpMock.verify();
  }));

  it('should signup', inject([AuthService, HttpTestingController, HttpClient], (service: AuthService, http: HttpClient) => {
    const mockuser = { username: 'song', password: 'Song123#', fullname: 'song'};

    http.post('http://localhost:8080/api/users', mockuser).subscribe( data => {
        expect(data.hasOwnProperty('username')).toBeTruthy();
        expect(data.hasOwnProperty('password')).toBeTruthy();
        expect(data.hasOwnProperty('fullname')).toBeTruthy();

        expect(data['username']).toBe(mockuser.username);
        expect(data['password']).toBe(mockuser.password);
        expect(data['fullname']).toBe(mockuser.fullname);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/users');
    req.flush(mockuser);
    httpMock.verify();
  }));
});
