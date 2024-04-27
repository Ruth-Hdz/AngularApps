import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNoticiasLrhzComponent } from './listado-noticias-lrhz.component';

describe('ListadoNoticiasLrhzComponent', () => {
  let component: ListadoNoticiasLrhzComponent;
  let fixture: ComponentFixture<ListadoNoticiasLrhzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoNoticiasLrhzComponent]
    });
    fixture = TestBed.createComponent(ListadoNoticiasLrhzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
