import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFoundProviderComponent } from './my-found-provider.component';

describe('MyFoundProviderComponent', () => {
  let component: MyFoundProviderComponent;
  let fixture: ComponentFixture<MyFoundProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFoundProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFoundProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
