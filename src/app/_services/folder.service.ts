import { Injectable } from '@angular/core';
import { Folder } from '../folder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FolderService {
  folderUrl = "http://localhost:8080/api/folders";
  constructor(private http: HttpClient) {  }
  getFolders():  Observable<Folder[]>  {
    return this.http.get<Folder[]>(this.folderUrl);
  }

  addFolder (folder: Folder): Observable<Folder> {
  return this.http.post<Folder>(this.folderUrl, folder, httpOptions).pipe(
    tap((folder: Folder) => console.log(`added folder w/ id=${folder}`))
  );
}


}
