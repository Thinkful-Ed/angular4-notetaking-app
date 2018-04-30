import { Injectable } from '@angular/core';
import { Tag } from '../tag';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TagService {
  tagUrl = "http://localhost:8080/api/tags";
  constructor(private http: HttpClient) {  }
  getTags():  Observable<Tag[]>  {
    return this.http.get<Tag[]>(this.tagUrl);
  }

  addTag (tag: Tag): Observable<Tag> {
  return this.http.post<Tag>(this.tagUrl, tag, httpOptions).pipe(
    tap((tag: Tag) => console.log(`added tag w/ id=${tag}`))
  );
}


}
