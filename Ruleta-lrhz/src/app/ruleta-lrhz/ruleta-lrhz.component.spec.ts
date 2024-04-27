import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuletaLrhzComponent } from './ruleta-lrhz.component';

describe('RuletaLrhzComponent', () => {
  let component: RuletaLrhzComponent;
  let fixture: ComponentFixture<RuletaLrhzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RuletaLrhzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RuletaLrhzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
