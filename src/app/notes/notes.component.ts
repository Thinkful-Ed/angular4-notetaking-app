import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../_services/note.service';
import { FolderService } from '../_services/folder.service';
import { TagService } from '../_services/tag.service';
import { Folder } from '../folder';
import { Tag } from '../tag';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteService: NoteService,
    private folderService: FolderService,
    private tagService: TagService) { }

  // Get and serve folder dropdown
  folder = new Folder();
  folders: Folder[];

  // Get and serve tags dropdown
  tag = new Tag();
  tags: Tag[];

  note = new Note();
  notes: Note[];

  submitted = false;

  // FOLDERS

  getFolders(): void {
    this.folderService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

  newFolder(folders: Folder[]) {
    this.folders = folders;
  }


  // TAGS

  getTags(): void {
    this.tagService.getTags()
      .subscribe(tags => this.tags = tags);
  }

  newTag(tags: Tag[]) {
    this.tags = tags;
  }

  // NOTES

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  deleteNote(id, e): void {
    this.noteService.deleteNote(id).subscribe(() => console.log('user deleted'));
    this.notes = this.notes.filter(function (obj) {
      return obj.id !== id;
    });
  }


  ngOnInit() {
    this.getNotes();
    this.getFolders();
    this.getTags();
  }

  submitForm(noteForm) {
    this.submitted = true;
    console.log('here is the note', noteForm);
    const title = noteForm.value.title,
      content = noteForm.value.content,
      folderId = noteForm.value.folderId,
      tagsNote = noteForm.value.tags;
    this.noteService.addNote({ title, content, folderId, tags: tagsNote } as Note)
      .subscribe(note => {
        this.note = new Note();
        this.notes.push(note);
      });
  }

}
