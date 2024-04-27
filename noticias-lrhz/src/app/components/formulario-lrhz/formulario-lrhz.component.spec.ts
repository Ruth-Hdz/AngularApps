import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLrhzComponent } from './formulario-lrhz.component';

describe('FormularioLrhzComponent', () => {
  let component: FormularioLrhzComponent;
  let fixture: ComponentFixture<FormularioLrhzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioLrhzComponent]
    });
    fixture = TestBed.createComponent(FormularioLrhzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
