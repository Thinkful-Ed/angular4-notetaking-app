import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../_services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  note = new Note();
  notes: Note[];
  constructor(private noteService: NoteService) { }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }
  ngOnInit() {
      this.getNotes();
  }
  submitted = false;

  submitForm = (noteForm) => {
    this.submitted = true;
    console.log("here is the note", noteForm)
    let title = noteForm.value.title,
      content = noteForm.value.content;
    this.noteService.addNote({ title, content } as Note)
    .subscribe(note => {
      this.notes.push(note);
    });
  }


}
