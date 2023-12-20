import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, docData, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  coleccion = 'candidatos';

  constructor(
    private firebase: Firestore) { }

    //Metodo del servicio para obtener todos los candidatos
  getAllCandidatos() : Observable<any[]> {
    const collRef = collection(this.firebase, this.coleccion);
    return collectionData(collRef, {idField: 'id'}) as Observable<any[]>;
  }

  //Metodo del servicio para obtener un candidato concreto
  getCandidato(id: string): Observable<any>{
    const docRef = doc(this.firebase, this.coleccion, id);
    return docData(docRef, {idField: 'id'}) as Observable<any>;
  }

  //Metodo del servicio para modificar un candidato en concreto
  updateCandidato(id: string, candidato: any): any{
    const docRef = doc(this.firebase, this.coleccion, id);
    return updateDoc(docRef, candidato);
  }

  //Metodo del servicio para añadir un nuevo candidato
  addCandidato(candidato: any){
    const collRef = collection(this.firebase, this.coleccion);
    return addDoc(collRef, candidato);
  }

  //Metodo del servicio para borrar un candidato en concreto
  delete(id: string){
    const docRef = doc(this.firebase, this.coleccion, id);
    return deleteDoc(docRef);
  }
}
