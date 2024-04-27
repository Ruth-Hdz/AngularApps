import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAssmComponent } from './navbar-assm.component';

describe('NavbarAssmComponent', () => {
  let component: NavbarAssmComponent;
  let fixture: ComponentFixture<NavbarAssmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAssmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAssmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
