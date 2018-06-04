import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { NotesService } from './notes.service';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ NotesService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
