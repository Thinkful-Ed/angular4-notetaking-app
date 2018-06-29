import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NotesService } from './notes.service';
import { BaseService } from './base.service';


import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { FoldersComponent } from './folders/folders.component';

import { AuthService } from './auth/auth.service';

import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

const appRoutes: Routes = [
  { path: 'notes', component: CreateNoteComponent },
  { path: 'folders', component: FoldersComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    redirectTo: '/notes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CreateNoteComponent,
    FoldersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001', 'localhost:8080', 'notefulapp.herokuapp.com'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    NotesService,
    AuthService,
    AuthGuard,
    BaseService],
  bootstrap: [AppComponent]
})

export class AppModule { }
