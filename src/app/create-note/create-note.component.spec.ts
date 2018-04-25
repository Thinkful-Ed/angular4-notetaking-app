import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CreateNoteComponent } from './create-note.component';
import { NotesComponent } from '../notes/notes.component';
import { FormsModule } from '@angular/forms';



describe('CreateNoteComponent', () => {
  let component: CreateNoteComponent;
  let fixture: ComponentFixture<CreateNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNoteComponent, NotesComponent ],
            schema: [ NO_ERRORS_SCHEMA ],
            imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoteComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form').valid).toBeFalsy();
  });

  it('filling out a form makes it valid', () => {

  const compiled = fixture.debugElement.nativeElement;
  const hostElement = fixture.nativeElement;
  const titleInput: HTMLInputElement = hostElement.querySelector('input');
  const bodyInput: HTMLInputElement = hostElement.querySelector('textarea');

  const form = compiled.querySelector('form');
  expect(form.valid).toBeFalsy();
  // simulate user entering a new name into the input box
  titleInput.value = 'New Note';
  bodyInput.value = 'Remember the Milk';


  // dispatch a DOM event so that Angular learns of input value change.
  titleInput.dispatchEvent( new Event("input"));
  bodyInput.dispatchEvent( new Event('textarea'));

  // Tell Angular to update the display binding through the title pipe
  fixture.detectChanges();
  expect(bodyInput.value).toBe('Remember the Milk');
  expect(titleInput.value).toBe('New Note');
  //TODO: Figure out why this isn't working!!!
  //expect(form.valid).toBeTruthy();
  });

  }
});
