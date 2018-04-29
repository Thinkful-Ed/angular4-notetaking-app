import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  constructor(private noteService: NoteService) { }

  getNotes(): void {
    this.notes = this.noteService.getNotes();
  }
  ngOnInit() {
      this.getNotes();
  }



}
