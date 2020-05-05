import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {
  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) {}
  //Crea un nuevo producto
  public createLog(data: {email: string, fechaLog: Date}) {
    return this.firestore.collection('logueo').add(data);
  }
  //Obtiene un producto
  public getLog(documentId: string) {
    return this.firestore.collection('logueo').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los productos
  public getLogs() {
    return this.firestore.collection('logueo').snapshotChanges();
  }

   //Crea un nuevo producto
   public createResul(data: {juego: string,email: string, fechaJugada: Date, resultado: string}) {
    return this.firestore.collection('resul').add(data);
  }
  //Obtiene un producto
  public getResul(documentId: string) {
    return this.firestore.collection('resul').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los productos
  public getResuls() {
    return this.firestore.collection('resul').snapshotChanges();
  }

  public 
  //Actualiza un producto
  /*public updateProduct(documentId: string, data: any) {
    return this.firestore.collection('products').doc(documentId).set(data);
  }*/

  // Borra un producto
  /*public deleteProduct(documentId: string) {
    return this.firestore.collection('products').doc(documentId).delete();
  }*/

   //Tarea para subir archivo
  public tareaCloudStorage(nombreArchivo: string, datos: any) {
    return this.storage.upload(nombreArchivo, datos);
  }

  //Referencia del archivo
  public referenciaCloudStorage(nombreArchivo: string) {
    return this.storage.ref(nombreArchivo);
  }
}
