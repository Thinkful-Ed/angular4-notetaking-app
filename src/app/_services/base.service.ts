import { Injectable } from '@angular/core';
import { Folder } from '../folder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable()
export class BaseService {
  baseUrl = "https://notefulapp.herokuapp.com/api";

}
