import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantForThingsToBeDoneComponent } from './applicant-for-things-to-be-done.component';

describe('ApplicantForThingsToBeDoneComponent', () => {
  let component: ApplicantForThingsToBeDoneComponent;
  let fixture: ComponentFixture<ApplicantForThingsToBeDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantForThingsToBeDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantForThingsToBeDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
