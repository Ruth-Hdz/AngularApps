import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertidorAssmComponent } from './convertidor-assm.component';

describe('ConvertidorAssmComponent', () => {
  let component: ConvertidorAssmComponent;
  let fixture: ComponentFixture<ConvertidorAssmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertidorAssmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertidorAssmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
