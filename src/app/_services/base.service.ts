import { Injectable } from '@angular/core';
import { Folder } from '../folder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class BaseService {
  baseUrl = 'https://notefulapp.herokuapp.com/api';
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
