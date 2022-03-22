import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOffersForThingsToBeDoneComponent } from './my-offers-for-things-to-be-done.component';

describe('MyOffersForThingsToBeDoneComponent', () => {
  let component: MyOffersForThingsToBeDoneComponent;
  let fixture: ComponentFixture<MyOffersForThingsToBeDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOffersForThingsToBeDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOffersForThingsToBeDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
