import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDelComponent } from './project-del.component';

describe('ProjectDelComponent', () => {
  let component: ProjectDelComponent;
  let fixture: ComponentFixture<ProjectDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
