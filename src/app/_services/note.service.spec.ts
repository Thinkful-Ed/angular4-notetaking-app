import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NoteService } from './note.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../note';
import { of } from 'rxjs/observable/of';
describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteService, HttpClient],
      imports: [ HttpClientTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
    });
  });

  it('should be created', inject([NoteService], (service: NoteService) => {
    expect(service).toBeTruthy();
  }));

  it('should get notes', inject([NoteService, HttpTestingController, HttpClient], (service: NoteService, httpMock: HttpTestingController) => {
    const response: Note[] = [
      { id : 1,
        title : 'string',
        content : 'string'},
      { id : 2,
        title : 'test',
        content : 'test'},
      { id : 3,
        title : 'test',
        content : 'test'}
    ];
    service.getNotes().subscribe((notes) => {
      expect(response.length).toBe(3);
      expect(response[0]['id']).toBe(1);
      expect(response[0]['title']).toBe('string');
      expect(response[0]['content']).toBe('string');
    })
    const req = httpMock.expectOne(service.notesUrl);
    req.flush(response);
    httpMock.verify();
  }));
});
