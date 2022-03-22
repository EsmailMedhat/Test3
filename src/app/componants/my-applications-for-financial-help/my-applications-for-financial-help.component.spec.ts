import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicationsForFinancialHelpComponent } from './my-applications-for-financial-help.component';

describe('MyApplicationsForFinancialHelpComponent', () => {
  let component: MyApplicationsForFinancialHelpComponent;
  let fixture: ComponentFixture<MyApplicationsForFinancialHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyApplicationsForFinancialHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApplicationsForFinancialHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
