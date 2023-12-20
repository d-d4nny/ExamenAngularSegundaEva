import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistasDetallesComponent } from './entrevistas-detalles.component';

describe('EntrevistasDetallesComponent', () => {
  let component: EntrevistasDetallesComponent;
  let fixture: ComponentFixture<EntrevistasDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrevistasDetallesComponent]
    });
    fixture = TestBed.createComponent(EntrevistasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
