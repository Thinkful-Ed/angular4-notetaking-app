import { Injectable } from '@angular/core';
import { Note } from './note';
import { NOTES } from './mock-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NoteService {

  constructor() { }
  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }
}
