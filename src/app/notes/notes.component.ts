import { Component, OnInit, Input } from "@angular/core";
import { NotesService } from '../notes.service';

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  @Input() _notes;

  constructor(private notesService: NotesService) { }


  getNotes(): void {
    this._notes = this.notesService.getNotes();
  }

  ngOnInit() {}
}
