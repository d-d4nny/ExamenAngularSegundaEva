import { TestBed } from '@angular/core/testing';

import { PuestosDisponiblesService } from './puestos-disponibles.service';

describe('PuestosDisponiblesService', () => {
  let service: PuestosDisponiblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuestosDisponiblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
