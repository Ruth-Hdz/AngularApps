import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonesLrhzComponent } from './digimones-lrhz.component';

describe('DigimonesLrhzComponent', () => {
  let component: DigimonesLrhzComponent;
  let fixture: ComponentFixture<DigimonesLrhzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigimonesLrhzComponent]
    });
    fixture = TestBed.createComponent(DigimonesLrhzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
