import { TestBed, inject } from '@angular/core/testing';
import { NotesService } from './notes.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { BaseService } from './base.service';


describe('NotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseService, NotesService]
    });
  });

  it('should be created', inject([NotesService], (service: NotesService) => {
    expect(service).toBeTruthy();
  }));
});
