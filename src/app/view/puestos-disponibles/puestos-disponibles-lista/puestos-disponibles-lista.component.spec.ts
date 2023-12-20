import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestosDisponiblesListaComponent } from './puestos-disponibles-lista.component';

describe('PuestosDisponiblesListaComponent', () => {
  let component: PuestosDisponiblesListaComponent;
  let fixture: ComponentFixture<PuestosDisponiblesListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuestosDisponiblesListaComponent]
    });
    fixture = TestBed.createComponent(PuestosDisponiblesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
