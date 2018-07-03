import { Injectable } from '@angular/core';
import { NOTES } from './mock-data';
import { Note } from './models';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NotesService {

  constructor() { }



  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }

}
