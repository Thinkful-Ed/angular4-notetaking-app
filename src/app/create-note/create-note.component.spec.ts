import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CreateNoteComponent } from "./create-note.component";
import { BaseService } from "../base.service";
import { NotesService } from "../notes.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("CreateNoteComponent", () => {
  let component: CreateNoteComponent;
  let fixture: ComponentFixture<CreateNoteComponent>;
  let app;
  let compiled;
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CreateNoteComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [BaseService, NotesService],
        imports: [ HttpClientTestingModule, FormsModule ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
  fixture = TestBed.createComponent(CreateNoteComponent);
  component = fixture.componentInstance;
  app = fixture.debugElement.componentInstance;
  compiled = fixture.debugElement.nativeElement;
  fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a form for notes" + location, () => {
    expect(compiled.querySelector("form").nodeName).toEqual("FORM");
  });
});
