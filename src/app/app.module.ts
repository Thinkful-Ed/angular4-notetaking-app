import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { NotesService } from './notes.service';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { FoldersComponent } from './folders/folders.component';


const appRoutes: Routes = [
  { path: 'notes', component: CreateNoteComponent },
  { path: 'folders', component: FoldersComponent },
  { path: '**',
    redirectTo: '/notes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CreateNoteComponent,
    FoldersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [ NotesService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
