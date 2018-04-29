
import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})

export class CreateNoteComponent implements OnInit {
  note = new Note();
  submitted = false;

  submitForm = (form) => {
    this.submitted = true;
    console.log(form.value.body);
  }

  ngOnInit(){

  }
}
