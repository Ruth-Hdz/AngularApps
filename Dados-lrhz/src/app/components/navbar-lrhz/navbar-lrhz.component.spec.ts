import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLrhzComponent } from './navbar-lrhz.component';

describe('NavbarLrhzComponent', () => {
  let component: NavbarLrhzComponent;
  let fixture: ComponentFixture<NavbarLrhzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLrhzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLrhzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
