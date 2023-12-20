import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, docData, query, updateDoc, where } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrevistasService {

  //Colecciones de la base de datos
  entrevistas: string = 'entrevistas';
  cantidatos: string = 'candidatos';
  puestosDisponibles: string = 'puestosDisponibles';
  
  constructor(
    private firebase: Firestore) { }


  //Metodo del servicio para obtener todas las entrevistas
  getAllEntrevistas() : Observable<any[]> {
    const collRef = collection(this.firebase, this.entrevistas);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }

  //Metodo del servicio para modificar una entrevista en concreto
  updateEntrevista(id: string, entrevista: any): any{
    const docRef = doc(this.firebase, this.entrevistas, id);
    return updateDoc(docRef, entrevista);
  }

  //Metodo del servicio para añadir una nueva entrevista
  addEntrevista(entrevista: any){
    const collRef = collection(this.firebase, this.entrevistas);
    return addDoc(collRef, entrevista);
  }
  
  //Metodo del servicio para obtener una entrevista concreta
  getEntrevista(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.entrevistas, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

  //Metodo del servicio para obtener todos los candidatos
  listCandidato() : Observable<any[]> {
    const collRef = collection(this.firebase, this.cantidatos);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }

  //Metodo del servicio para obtener todos los puestos
  listPuestoDisponible() : Observable<any[]> {
    const collRef = collection(this.firebase, this.puestosDisponibles);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }

  listQuery() : Observable<any[]> {
    const collRef = collection(this.firebase, this.puestosDisponibles);
    const qRef = query(collRef, where('estado', '==', true));
    return collectionData(qRef, {idField: 'id'}) as Observable<any[]>;
  }
  
  //Metodo del servicio para obtener un candidato concreto
  getCandidato(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.cantidatos, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

  //Metodo del servicio para obtener un puesto concreto
  getPuestosDisponibles(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.puestosDisponibles, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

   //Metodo del servicio para borrar una entrevista en concreto
   delete(id: string){
    const docRef = doc(this.firebase, this.entrevistas, id);
    return deleteDoc(docRef);
  }
}

