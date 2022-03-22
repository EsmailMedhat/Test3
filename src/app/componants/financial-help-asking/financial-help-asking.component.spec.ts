import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialHelpAskingComponent } from './financial-help-asking.component';

describe('FinancialHelpAskingComponent', () => {
  let component: FinancialHelpAskingComponent;
  let fixture: ComponentFixture<FinancialHelpAskingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialHelpAskingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialHelpAskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
