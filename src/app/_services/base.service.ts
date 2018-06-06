import { Injectable } from '@angular/core';
import { Folder } from '../folder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class BaseService {
  baseUrl = environment.baseUrl;
  baseOptions = { 'Content-Type': 'application/json' };

  getHttpHeaders(headers = {}) {
    const httpOptions = {
      headers: new HttpHeaders({ ...this.baseOptions, ...headers })
    };
    return httpOptions;
  }

  getAuthHttpHeaders() {
    return this.getHttpHeaders({ 'Authorization': 'Bearer ' + localStorage.token });
  }

}
