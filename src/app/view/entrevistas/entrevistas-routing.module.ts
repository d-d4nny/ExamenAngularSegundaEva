import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrevistasListaComponent } from './entrevistas-lista/entrevistas-lista.component';
import { EntrevistasDetallesComponent } from './entrevistas-detalles/entrevistas-detalles.component';

const routes: Routes = [
  { path: '', component: EntrevistasListaComponent },
  { path: 'entrevistas/:id/edit', component: EntrevistasDetallesComponent },
  { path: 'entrevistas/new', component: EntrevistasDetallesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrevistasRoutingModule { }
