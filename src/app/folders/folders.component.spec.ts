import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FoldersComponent } from './folders.component';

describe('FoldersComponent', () => {
  let component: FoldersComponent;
  let fixture: ComponentFixture<FoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldersComponent ],
      schema: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
