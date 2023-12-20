import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuestosDisponiblesRoutingModule } from './puestos-disponibles-routing.module';
import { PuestosDisponiblesDetallesComponent } from './puestos-disponibles-detalles/puestos-disponibles-detalles.component';
import { PuestosDisponiblesListaComponent } from './puestos-disponibles-lista/puestos-disponibles-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    PuestosDisponiblesDetallesComponent,
       PuestosDisponiblesListaComponent
  ],
  imports: [
    CommonModule,
    PuestosDisponiblesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PuestosDisponiblesModule { }
