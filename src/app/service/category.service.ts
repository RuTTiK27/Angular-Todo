import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private firestore:Firestore) { }

  saveCategory(data:object){
    const dbInstance = collection(this.firestore,'categories');
    return addDoc(dbInstance,data);
  }

}
