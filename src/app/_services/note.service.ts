import { Injectable } from '@angular/core';
import { Note } from '../note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NoteService {
  notesUrl = "http://localhost:8080/api/notes";
  constructor(private http: HttpClient) {  }
  getNotes():  Observable<Note[]>  {
    return this.http.get<Note[]>(this.notesUrl);
  }

  addNote (note: Note): Observable<Note> {
  return this.http.post<Note>(this.notesUrl, note, httpOptions).pipe(
    tap((note: Note) => console.log(`added note w/ id=${note.id}`),
        error => {
          if (error.status == 400)
            alert(error.error.message)
        }  
    )
  );
}


}
