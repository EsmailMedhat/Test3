import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApplicationsForThingsToBeDoneComponent } from './my-applications-for-things-to-be-done.component';

describe('MyApplicationsForThingsToBeDoneComponent', () => {
  let component: MyApplicationsForThingsToBeDoneComponent;
  let fixture: ComponentFixture<MyApplicationsForThingsToBeDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyApplicationsForThingsToBeDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApplicationsForThingsToBeDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
