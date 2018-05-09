import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NotesComponent } from './notes.component';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../_services/note.service';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;
  let app;
  let compiled;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule, HttpClientTestingModule ],
      providers: [NoteService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have article for notes' + location, () => {
    expect(compiled.querySelector('article').nodeName).toEqual('ARTICLE');
  });

  }
);
