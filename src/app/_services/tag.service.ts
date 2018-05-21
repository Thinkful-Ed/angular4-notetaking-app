import { Injectable } from '@angular/core';
import { Tag } from '../tag';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TagService {
  tagUrl = "/tags";
  constructor(private http: HttpClient, private baseService: BaseService) {  }

  getTags():  Observable<Tag[]>  {
    return this.http.get<Tag[]>(this.baseService.baseUrl + this.tagUrl);
  }

  addTag (tag: Tag): Observable<Tag> {
  return this.http.post<Tag>(this.baseService.baseUrl + this.tagUrl, tag, httpOptions).pipe(
    tap((tag: Tag) => console.log(`added tag w/ id=${tag}`),
        error => {
          if (error.status == 400)
            alert(error.error.message)
        }
      )
  );
}


}
