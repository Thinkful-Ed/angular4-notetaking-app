import { async, ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NotesComponent } from "./notes.component";
import { NotesService } from '../notes.service';
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { Note } from "../models";
import { BaseService } from "../base.service";

describe("NotesComponent", () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;
  let app;
  let compiled;
  let httpMock;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [NotesComponent],
        providers: [BaseService, NotesService],
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

  it('should get notes', inject([NotesService], (service: NotesService) => {
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
