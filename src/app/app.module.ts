import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { TagsComponent } from './tags/tags.component';
import { FoldersComponent } from './folders/folders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { NoteService } from './_services/note.service';
import { TagService } from './_services/tag.service';
import { FolderService } from './_services/folder.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import {
  AuthGuardService as AuthGuard
} from './auth/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'notes', component: NotesComponent, canActivate: [AuthGuard] },
  { path: 'tags', component: TagsComponent, canActivate: [AuthGuard] },
  { path: 'folders', component: FoldersComponent, canActivate: [AuthGuard] },
  { path: '**',
    redirectTo: '/notes',
    pathMatch: 'full'
  }
];

@NgModule({
imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
    ),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001', 'localhost:8080'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
  ],
  declarations: [
    AppComponent,
    NotesComponent,
    TagsComponent,
    FoldersComponent,
    LoginComponent,
  ],
  providers: [
  NoteService,
  TagService,
  FolderService,
  AuthService,
  AuthGuard,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
