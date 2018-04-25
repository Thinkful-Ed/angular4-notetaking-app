import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { TagsComponent } from './tags/tags.component';
import { FoldersComponent } from './folders/folders.component';


@NgModule({
imports: [
    BrowserModule,
    FormsModule  ],
  declarations: [
    AppComponent,
    NotesComponent,
    CreateNoteComponent,
    TagsComponent,
    FoldersComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
