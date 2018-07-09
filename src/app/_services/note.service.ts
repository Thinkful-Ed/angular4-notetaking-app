import { Injectable } from '@angular/core';
import { Note } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class NoteService {
  notesUrl = '/notes';
  constructor(private http: HttpClient, private baseService: BaseService) { }

  getNotes(): Observable<Note[]> {
    const httpOptions = this.baseService.getHttpHeaders();
    return this.http.get<Note[]>(this.baseService.baseUrl + this.notesUrl, httpOptions);
  }

  addNote(note: Note): Observable<Note> {
    const httpOptions = this.baseService.getHttpHeaders();
    return this.http.post<Note>(this.baseService.baseUrl + this.notesUrl, note, httpOptions).pipe(
      tap((newNote: Note) => console.log(`added note w/ id=${newNote.id}`),
        error => {
          if (error.status === 400) {
            alert(error.error.message);
          }
        }
      )
    );
  }

  updateNote(note: Note): Observable<Note> {
    const httpOptions = this.baseService.getHttpHeaders();
    return this.http.put<Note>(this.baseService.baseUrl + this.notesUrl + `/${note.id}`, note, httpOptions).pipe(
      tap((newNote: Note) => console.log(`added updated w/ id=${newNote.id}`),
        error => {
          if (error.status === 400) {
            alert(error.error.message);
          }
        }
      )
    );
  }

  deleteNote(id: number): Observable<Note> {
    console.log('deleting', id);
    const httpOptions = this.baseService.getHttpHeaders();
    return this.http.delete<Note>(this.baseService.baseUrl + this.notesUrl + '/' + id, httpOptions).pipe(
      tap((deltedNote: Note) => console.log(`deleted note w/ id=${id}`))
    );
  }


}
