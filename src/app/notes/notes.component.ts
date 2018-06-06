import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../_services/note.service';
import { FolderService } from '../_services/folder.service';
import { TagService } from '../_services/tag.service';
import { Folder } from '../folder';
import { Tag } from '../tag';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteService: NoteService,
    public auth: AuthService,
    public router: Router,
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

  ngOnInit() {
    this.getFolders();
  }

  // FOLDERS

  getFolders() {
    return this.folderService.getFolders()
      .subscribe(folders => this.folders = folders, (err) => console.log(err), () => this.getTags());
  }

  newFolder(folders: Folder[]) {
    this.folders = folders;
  }

  getFolder(folder) {
    if (typeof folder === 'string') {
      const found = this.folders.find(f => f.id === folder);
      if (found) {
        return found.name;
      }
    } else if (typeof folder === 'object') {
      return folder.name;
    }
    return folder;
  }


  // TAGS

  getTags() {
    return this.tagService.getTags()
      .subscribe(tags => this.tags = tags, (err) => console.log(err), () => this.getNotes());
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
    if (confirm('Are you sure want to delete this note?')) {
      this.noteService.deleteNote(id).subscribe(() => console.log('user deleted'));
      this.notes = this.notes.filter(function (obj) {
        return obj.id !== id;
      });
    }
  }

  updateNote(note) {
    this.note = {
      ...note,
      tags: note.tags.map(t => t.id)
    };
  }


  submitForm(noteForm) {
    this.submitted = true;
    console.log('here is the note', noteForm);
    const title = noteForm.value.title,
      content = noteForm.value.content,
      folderId = noteForm.value.folderId,
      tagsNote = noteForm.value.tags;

    let method;

    if (this.note.id) {
      method = this.noteService.updateNote({ title, content, folderId, tags: tagsNote, id: this.note.id } as Note);
    } else {
      method = this.noteService.addNote({ title, content, folderId, tags: tagsNote } as Note);
    }

    method.subscribe(note => {
      this.note = new Note();
      this.getNotes();
    });
  }

  cancelUpdate() {
    this.note = new Note();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
