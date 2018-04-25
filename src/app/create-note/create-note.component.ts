
import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NOTES } from '../mock-data';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})

export class CreateNoteComponent implements OnInit {
  note = new Note();
  submitted = false;
  _notes = NOTES;

  submitForm = (form) => {
    this.submitted = true;
    console.log(form.value.body);
    let update_notes = this._notes;
    update_notes.push({ id: 0, title: form.value.title, body: form.value.body});
    this._notes = update_notes;
  }

  ngOnInit(){

  }
}
