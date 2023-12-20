import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.development';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CandidatosModule } from './view/candidatos/candidatos.module';
import { EntrevistasModule } from './view/entrevistas/entrevistas.module';
import { PuestosDisponiblesModule } from './view/puestos-disponibles/puestos-disponibles.module';
import { ContenedorPrincipalComponent } from './home/contenedor-principal/contenedor-principal.component';
import { homeModule } from './home/home.module';
import { BienvenidaPrincipalComponent } from './home/bienvenida-principal/bienvenida-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorPrincipalComponent,
    BienvenidaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    homeModule,
    CandidatosModule,
    EntrevistasModule,
    PuestosDisponiblesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
