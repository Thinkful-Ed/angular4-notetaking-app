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

   deleteNote(id, e): void {
      this.notesService.deleteNote(id).subscribe(() => console.log("Note deleted"));
      this._notes = this._notes.filter(function( obj ) {
        return obj.id !== id;
      });
    }
  ngOnInit() {}
}
