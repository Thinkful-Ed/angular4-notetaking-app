import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NotesComponent } from "./notes.component";
import { NoteService } from '../_services/note.service';
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { Note } from "../models";
import { BaseService } from "../_services/base.service";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../auth/auth.service";
import { RouterTestingModule } from "@angular/router/testing";
import { FolderService } from "../_services/folder.service";
import { TagService } from "../_services/tag.service";

describe("NotesComponent", () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;
  let app;
  let compiled;
  let httpMock;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
        declarations: [NotesComponent],
        providers: [BaseService, NoteService, AuthService, FolderService, TagService],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should have a list for notes" + location, () => {
    expect(compiled.querySelector("ul").nodeName).toEqual("UL");
  });

  it('should get notes', inject([NoteService], (service: NoteService) => {
    const response: Note[] = [
      {
        id: 1,
        title: 'string',
        content: 'string'
      },
      {
        id: 2,
        title: 'test',
        content: 'test'
      },
      {
        id: 3,
        title: 'test',
        content: 'test'
      }
    ];
    service.getNotes().subscribe((notes) => {
      expect(response.length).toBe(3);
      expect(response[0]['id']).toBe(1);
      expect(response[0]['title']).toBe('string');
      expect(response[0]['content']).toBe('string');
    });
    const req = httpMock.expectOne(service.notesUrl);
    req.flush(response);
    httpMock.verify();
  }));
});
