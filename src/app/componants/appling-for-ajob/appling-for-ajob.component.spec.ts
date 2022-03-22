import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplingForAjobComponent } from './appling-for-ajob.component';

describe('ApplingForAjobComponent', () => {
  let component: ApplingForAjobComponent;
  let fixture: ComponentFixture<ApplingForAjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplingForAjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplingForAjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
