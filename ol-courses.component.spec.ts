import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlCoursesComponent } from './ol-courses.component';

describe('OlCoursesComponent', () => {
  let component: OlCoursesComponent;
  let fixture: ComponentFixture<OlCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OlCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OlCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
