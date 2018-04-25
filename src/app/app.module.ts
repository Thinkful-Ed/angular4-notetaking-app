import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';


@NgModule({
imports: [
    BrowserModule,
    FormsModule  ],
  declarations: [
    AppComponent,
    NotesComponent,
    CreateNoteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
