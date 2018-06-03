import { Component, OnInit } from "@angular/core";
import { Note } from "../models";
import { NOTES } from '../mock-data';

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {

  _notes = NOTES;

  constructor() {}

  ngOnInit() {}
}
