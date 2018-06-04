import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Note } from "../models";
import { NOTES } from '../mock-data';
import { NotesService } from '../notes.service';


@Component({
  selector: "app-create-note",
  templateUrl: "./create-note.component.html",
  styleUrls: ["./create-note.component.css"]
})
export class CreateNoteComponent implements OnInit {
constructor(private notesService: NotesService) { }

  note = new Note();
  submitted = false;
  _notes = NOTES;


submitForm = (noteForm) => {
    this.submitted = true;
    console.log("here is the note", noteForm)
    let title = noteForm.value.title,
      content = noteForm.value.content,
      folderId = noteForm.value.folderId;
    this.notesService.addNote({ title, content } as Note)
    .subscribe(note => {
      this.note = new Note();
      this._notes.push(note);
    });
  }

  ngOnInit() {}
}
