import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FolderService } from './folder.service';

describe('FolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FolderService],
      imports: [ HttpClientTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
    });
  });

  it('should be created', inject([FolderService], (service: FolderService) => {
    expect(service).toBeTruthy();
  }));
});
