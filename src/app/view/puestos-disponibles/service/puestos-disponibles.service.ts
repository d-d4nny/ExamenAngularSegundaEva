import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, docData, setDoc, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuestosDisponiblesService {

  coleccion = 'puestosDisponibles';
  
  constructor(
    private firebase: Firestore) { }

    //Metodo del servicio para obtener todos los puestos
  getAllPuestosDisponibles() : Observable<any[]> {
    const collRef = collection(this.firebase, this.coleccion);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }

  //Metodo del servicio para obtener un puesto concreto
  getPuestosDisponible(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.coleccion, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

  //Metodo del servicio para modificar un puesto en concreto
  updatePuestoDisponible(id: string, puestoDisponible: any): any{
    const docRef = doc(this.firebase, this.coleccion, id);
    return updateDoc(docRef, puestoDisponible);
  }

  updateEstado(id: any, estado: boolean){
    const docRef = doc(this.firebase, this.coleccion, id);
    return updateDoc(docRef, {estado: estado});
  }

  //Metodo del servicio para añadir un nuevo puesto
  addPuestosDisponible(puestoDisponible: any){
    const collRef = collection(this.firebase, this.coleccion);
    return addDoc(collRef, puestoDisponible);
  }

  //Metodo del servicio para borrar un puesto en concreto
  delete(id: string){
    const docRef = doc(this.firebase, this.coleccion, id);
    return deleteDoc(docRef);
  }
}

