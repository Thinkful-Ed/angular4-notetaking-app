import { Component, OnInit } from "@angular/core";
import { Note } from "../note";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  note: Note = {
    id: 1,
    title: "shopping list",
    date: Date.now().toString(),
    body: "milk, butter, ice cream, strawberries, apples, grapes, jelly"
  };

  constructor() {}

  ngOnInit() {}
}
