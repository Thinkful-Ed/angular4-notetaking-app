import { Component, OnInit } from '@angular/core';
import { Note } from "../models";
import { NOTES } from '../mock-data';


@Component({
  selector: "app-create-note",
  templateUrl: "./create-note.component.html",
  styleUrls: ["./create-note.component.css"]
})
export class CreateNoteComponent implements OnInit {
  constructor() {}

  note = new Note();
  submitted = false;
  _notes = NOTES;

  submitForm = form => {
    this.submitted = true;
    console.log(form.value.body);
    const update_notes = this._notes;
    update_notes.push({
      id: 0,
      title: form.value.title,
      content: form.value.content
    });
    this._notes = update_notes;
  }

  ngOnInit() {}
}
