import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestosDisponiblesDetallesComponent } from './puestos-disponibles-detalles.component';

describe('PuestosDisponiblesDetallesComponent', () => {
  let component: PuestosDisponiblesDetallesComponent;
  let fixture: ComponentFixture<PuestosDisponiblesDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuestosDisponiblesDetallesComponent]
    });
    fixture = TestBed.createComponent(PuestosDisponiblesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
