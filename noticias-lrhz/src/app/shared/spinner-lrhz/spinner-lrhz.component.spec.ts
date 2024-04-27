import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerLrhzComponent } from './spinner-lrhz.component';

describe('SpinnerLrhzComponent', () => {
  let component: SpinnerLrhzComponent;
  let fixture: ComponentFixture<SpinnerLrhzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerLrhzComponent]
    });
    fixture = TestBed.createComponent(SpinnerLrhzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
