import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Note } from "../models";


@Component({
  selector: "app-create-note",
  templateUrl: "./create-note.component.html",
  styleUrls: ["./create-note.component.css"]
})
export class CreateNoteComponent implements OnInit {
  constructor() {}

  note = new Note();
  submitted = false;
  _notes : Note[];

  submitForm = form => {
    this.submitted = true;
    console.log(form.value.body);
    let update_notes = this._notes;
    update_notes.push({
      id: 0,
      title: form.value.title,
      content: form.value.body
    });
    this._notes = update_notes;
  };

  ngOnInit() {}
}
