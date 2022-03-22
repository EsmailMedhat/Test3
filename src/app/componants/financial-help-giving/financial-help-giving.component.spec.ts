import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialHelpGivingComponent } from './financial-help-giving.component';

describe('FinancialHelpGivingComponent', () => {
  let component: FinancialHelpGivingComponent;
  let fixture: ComponentFixture<FinancialHelpGivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialHelpGivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialHelpGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
