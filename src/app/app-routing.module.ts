import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaPrincipalComponent } from './home/bienvenida-principal/bienvenida-principal.component';

const routes: Routes = [
  { path: '', component: BienvenidaPrincipalComponent},
  { 
    path: 'candidatos', loadChildren: () => import('./view/candidatos/candidatos.module').then
    (c => c.CandidatosModule) 
  },
  { 
    path: 'puestos-disponibles', loadChildren: () => import('./view/puestos-disponibles/puestos-disponibles.module').then
    (a => a.PuestosDisponiblesModule) 
  },
  { 
    path: 'entrevistas', loadChildren: () => import('./view/entrevistas/entrevistas.module').then
    (m => m.EntrevistasModule) 
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
