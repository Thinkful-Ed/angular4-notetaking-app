import { Injectable } from '@angular/core';
import { Folder } from '../folder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class FolderService {
  folderUrl = '/folders';
  constructor(private http: HttpClient,
    private baseService: BaseService) { }

  getFolders(): Observable<Folder[]> {
    const httpOptions = this.baseService.getAuthHttpHeaders();
    return this.http.get<Folder[]>(this.baseService.baseUrl + this.folderUrl, httpOptions);
  }

  addFolder(folder: Folder): Observable<Folder> {
    const httpOptions = this.baseService.getAuthHttpHeaders();
    return this.http.post<Folder>(this.baseService.baseUrl + this.folderUrl, folder, httpOptions).pipe(
      tap(
        (newFolder: Folder) => console.log(`added folder w/ id=${newFolder}`),
        error => {
          if (error.status === 400) {
            alert(error.error.message);
          }
        }
      )
    );
  }

  deleteFolder(id: String): Observable<Folder> {
    const httpOptions = this.baseService.getAuthHttpHeaders();
    return this.http.delete<Folder>(this.baseService.baseUrl + this.folderUrl + `/${id}`, httpOptions)
      .pipe(
        tap((newFolder: Folder) => console.log(`added folder w/ id=${newFolder}`),
          error => {
            if (error.status === 400) {
              alert(error.error.message);
            }
          }
        )
      );
  }
}
