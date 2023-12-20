import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrevistasListaComponent } from './entrevistas-lista.component';

describe('EntrevistasListaComponent', () => {
  let component: EntrevistasListaComponent;
  let fixture: ComponentFixture<EntrevistasListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntrevistasListaComponent]
    });
    fixture = TestBed.createComponent(EntrevistasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
