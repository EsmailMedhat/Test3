import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLostComponent } from './my-lost.component';

describe('MyLostComponent', () => {
  let component: MyLostComponent;
  let fixture: ComponentFixture<MyLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
