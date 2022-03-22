import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingAjobComponent } from './offering-ajob.component';

describe('OfferingAjobComponent', () => {
  let component: OfferingAjobComponent;
  let fixture: ComponentFixture<OfferingAjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferingAjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingAjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
