import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../_services/note.service';
import { FolderService } from '../_services/folder.service';
import { TagsComponent } from '../tags/tags.component';
import { Folder } from '../folder';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  constructor(private noteService: NoteService, private folderService: FolderService) { }

  folder = new Folder();
  folders: Folder[];

  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

  note = new Note();
  notes: Note[];

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  ngOnInit() {
      this.getNotes();
      this.getFolders();
  }

  submitted = false;

  submitForm = (noteForm) => {
    this.submitted = true;
    console.log("here is the note", noteForm)
    let title = noteForm.value.title,
      content = noteForm.value.content,
      folderId = noteForm.value.folderId;
    this.noteService.addNote({ title, content, folderId } as Note)
    .subscribe(note => {
      this.notes.push(note);
    });
  }


}
