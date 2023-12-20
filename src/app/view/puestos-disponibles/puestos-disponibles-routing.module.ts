import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PuestosDisponiblesListaComponent } from './puestos-disponibles-lista/puestos-disponibles-lista.component';
import { PuestosDisponiblesDetallesComponent } from './puestos-disponibles-detalles/puestos-disponibles-detalles.component';

const routes: Routes = [
  { path: '', component: PuestosDisponiblesListaComponent },
  { path: 'puestos-disponibles/:id/edit', component: PuestosDisponiblesDetallesComponent },
  { path: 'puestos-disponibles/new', component: PuestosDisponiblesDetallesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PuestosDisponiblesRoutingModule { }
