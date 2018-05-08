import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../note';
import { of } from 'rxjs/observable/of';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should logged in', inject([AuthService, HttpTestingController, HttpClient], (service: AuthService, httpMock: HttpTestingController, http: HttpClient) => {
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

  it('should signup', inject([AuthService, HttpTestingController, HttpClient], (service: AuthService, httpMock: HttpTestingController, http: HttpClient) => {
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
