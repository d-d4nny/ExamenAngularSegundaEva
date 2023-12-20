import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidaPrincipalComponent } from './bienvenida-principal.component';

describe('BienvenidaPrincipalComponent', () => {
  let component: BienvenidaPrincipalComponent;
  let fixture: ComponentFixture<BienvenidaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienvenidaPrincipalComponent]
    });
    fixture = TestBed.createComponent(BienvenidaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
