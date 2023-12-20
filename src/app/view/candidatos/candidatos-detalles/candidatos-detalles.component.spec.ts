import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosDetallesComponent } from './candidatos-detalles.component';

describe('CandidatosDetallesComponent', () => {
  let component: CandidatosDetallesComponent;
  let fixture: ComponentFixture<CandidatosDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatosDetallesComponent]
    });
    fixture = TestBed.createComponent(CandidatosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
