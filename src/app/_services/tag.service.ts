import { Injectable } from '@angular/core';
import { Tag } from '../tag';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class TagService {
  tagUrl = '/tags';
  constructor(private http: HttpClient, private baseService: BaseService) { }

  getTags(): Observable<Tag[]> {
    const httpOptions = this.baseService.getHttpHeaders();
    return this.http.get<Tag[]>(this.baseService.baseUrl + this.tagUrl, httpOptions);
  }

  addTag(tag: Tag): Observable<Tag> {
    const httpOptions = this.baseService.getHttpHeaders();
    return this.http.post<Tag>(this.baseService.baseUrl + this.tagUrl, tag, httpOptions).pipe(
      tap((newTag: Tag) => console.log(`added tag w/ id=${newTag}`),
        error => {
          if (error.status === 400) {
            alert(error.error.message);
          }
        }
      )
    );
  }

  deleteTag(id: String): Observable<Tag> {
    const httpOptions = this.baseService.getHttpHeaders();
    return this.http.delete<Tag>(this.baseService.baseUrl + this.tagUrl + `/${id}`, httpOptions).pipe(
      tap((newTag: Tag) => console.log(`added tag w/ id=${newTag}`),
        error => {
          if (error.status === 400) {
            alert(error.error.message);
          }
        }
      )
    );
  }

}
