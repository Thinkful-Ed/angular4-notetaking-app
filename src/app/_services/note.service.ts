import { Injectable } from '@angular/core';
import { Note } from '../note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NoteService {
  notesUrl = "/notes";
  constructor(private http: HttpClient, private baseService: BaseService) {  }

  getNotes():  Observable<Note[]>  {
    return this.http.get<Note[]>(this.baseService.baseUrl + this.notesUrl);
  }

  addNote (note: Note): Observable<Note> {
  return this.http.post<Note>(this.baseService.baseUrl + this.notesUrl, note, httpOptions).pipe(
    tap((note: Note) => console.log(`added note w/ id=${note.id}`),
        error => {
          if (error.status == 400)
            alert(error.error.message)
        }
    )
  );
  }

  deleteNote (id: number): Observable<Note> {
  console.log("deleting", id);
  return this.http.delete<Note>(this.baseService.baseUrl + this.notesUrl + '/' + id, httpOptions).pipe(
    tap((note: Note) => console.log(`deleted note w/ id=${id}`))
  );
}


}
