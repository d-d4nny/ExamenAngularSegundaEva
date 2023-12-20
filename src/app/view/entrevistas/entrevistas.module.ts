import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrevistasRoutingModule } from './entrevistas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntrevistasDetallesComponent } from './entrevistas-detalles/entrevistas-detalles.component';
import { EntrevistasListaComponent } from './entrevistas-lista/entrevistas-lista.component';


@NgModule({
  declarations: [
  
    EntrevistasDetallesComponent,
       EntrevistasListaComponent
  ],
  imports: [
    CommonModule,
    EntrevistasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntrevistasModule { }
