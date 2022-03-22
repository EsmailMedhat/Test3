import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsToBeDoneAskingComponent } from './things-to-be-done-asking.component';

describe('ThingsToBeDoneAskingComponent', () => {
  let component: ThingsToBeDoneAskingComponent;
  let fixture: ComponentFixture<ThingsToBeDoneAskingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThingsToBeDoneAskingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsToBeDoneAskingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
