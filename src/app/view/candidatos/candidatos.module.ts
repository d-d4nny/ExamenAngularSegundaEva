import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CandidatosDetallesComponent } from './candidatos-detalles/candidatos-detalles.component';
import { CandidatosListaComponent } from './candidatos-lista/candidatos-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CandidatosDetallesComponent,
    CandidatosListaComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CandidatosModule { }
