import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NotesComponent } from "./notes.component";

describe("NotesComponent", () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;
  let app;
  let compiled;
  
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NotesComponent],
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
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should have a list for notes" + location, () => {
    expect(compiled.querySelector("ul").nodeName).toEqual("UL");
  });
});
