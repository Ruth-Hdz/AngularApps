import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorLrhzComponent } from './convertidor-lrhz.component';

describe('ConvertidorLrhzComponent', () => {
  let component: ConvertidorLrhzComponent;
  let fixture: ComponentFixture<ConvertidorLrhzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertidorLrhzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertidorLrhzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
