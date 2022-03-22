import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsToBeDoneOfferingComponent } from './things-to-be-done-offering.component';

describe('ThingsToBeDoneOfferingComponent', () => {
  let component: ThingsToBeDoneOfferingComponent;
  let fixture: ComponentFixture<ThingsToBeDoneOfferingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingsToBeDoneOfferingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsToBeDoneOfferingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
