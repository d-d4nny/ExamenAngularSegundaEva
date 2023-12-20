import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosListaComponent } from './candidatos-lista/candidatos-lista.component';
import { CandidatosDetallesComponent } from './candidatos-detalles/candidatos-detalles.component';

const routes: Routes = [
  { path: '', component: CandidatosListaComponent },
  { path: 'candidatos/:id/edit', component: CandidatosDetallesComponent },
  { path: 'candidatos/new', component: CandidatosDetallesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
