import { async, ComponentFixture, TestBed, tick, inject, fakeAsync } from '@angular/core/testing';
import { LoginComponent, Login, User } from './login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from "@angular/common";
import { Observable } from 'rxjs';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let app;
  let compiled;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule, HttpClientTestingModule,RouterTestingModule ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    location = TestBed.get(Location) as Location;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title : Welcome to app! in first h1 tag' + location, () => {
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  });

  it('should have title : Welcome to app! in first h1 tag' + location, () => {
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  });

});
