import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantForFinancialHelpComponent } from './applicant-for-financial-help.component';

describe('ApplicantForFinancialHelpComponent', () => {
  let component: ApplicantForFinancialHelpComponent;
  let fixture: ComponentFixture<ApplicantForFinancialHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantForFinancialHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantForFinancialHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
