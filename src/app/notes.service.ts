import { Injectable } from "@angular/core";
import { NOTES } from "./mock-data";
import { Note } from "./models";
import { BaseService } from "./base.service";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NotesService {
  constructor(private http: HttpClient, private baseService: BaseService) {  }

  notesUrl = this.baseService.baseUrl + "/notes";


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


deleteNote (id: number): Observable<Note> {
    console.log("deleting", id);
    return this.http.delete<Note>(this.notesUrl + '/' + id, httpOptions).pipe(
      tap((note: Note) => console.log(`deleted note w/ id=${id}`))
    );
  }

}
