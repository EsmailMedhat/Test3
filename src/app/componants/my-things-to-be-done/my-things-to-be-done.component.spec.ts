import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThingsToBeDoneComponent } from './my-things-to-be-done.component';

describe('MyThingsToBeDoneComponent', () => {
  let component: MyThingsToBeDoneComponent;
  let fixture: ComponentFixture<MyThingsToBeDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyThingsToBeDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThingsToBeDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
