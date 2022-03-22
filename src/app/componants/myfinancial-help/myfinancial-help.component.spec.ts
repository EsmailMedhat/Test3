import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfinancialHelpComponent } from './myfinancial-help.component';

describe('MyfinancialHelpComponent', () => {
  let component: MyfinancialHelpComponent;
  let fixture: ComponentFixture<MyfinancialHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfinancialHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfinancialHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
