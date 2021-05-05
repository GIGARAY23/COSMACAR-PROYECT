import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(
    private AFauth: AngularFireAuth,
    public database: AngularFirestore
  ) {}

  // vamos a declarar las funciones aqui

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  
  }

  createDoc(data: any, path: string, id: string) {
    const collection = this.database.collection(path);
    return collection.doc(id).set(data); // es una funcion para crear documento
  }
  getDoc(path: string, id: string) {
    const collection = this.database.collection(path); //apuntamos a un documento
    return collection.doc(id).valueChanges();
  }

  deleteDoc(path: string, id: string) {
    const collection = this.database.collection(path); //apuntamos a un documento
    return collection.doc(id).delete();
  }
  updateDoc(data: any, path: string, id: string) {
    const collection = this.database.collection(path); //apuntamos a un documento
    return collection.doc(id).update(data);
  }
  getId() {
    return this.database.createId();
  }
getCollection<tipo>(path: string){
  const collection = this.database.collection<tipo>(path);
  return collection.valueChanges();
}


}
