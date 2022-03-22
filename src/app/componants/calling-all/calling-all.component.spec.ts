import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallingAllComponent } from './calling-all.component';

describe('CallingAllComponent', () => {
  let component: CallingAllComponent;
  let fixture: ComponentFixture<CallingAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallingAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallingAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
