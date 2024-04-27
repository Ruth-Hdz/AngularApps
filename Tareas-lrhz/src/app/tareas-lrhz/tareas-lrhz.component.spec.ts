import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasLrhzComponent } from './tareas-lrhz.component';

describe('TareasLrhzComponent', () => {
  let component: TareasLrhzComponent;
  let fixture: ComponentFixture<TareasLrhzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareasLrhzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasLrhzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
