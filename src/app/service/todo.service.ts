import { Injectable } from '@angular/core';
import { update } from '@angular/fire/database';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { increment  } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private firestore:Firestore) { }

  saveTodo(data:object,categoryId:string){
    const dbInstance = collection(this.firestore,`categories/${categoryId}/todos`);
    
    const docRef = doc(this.firestore, `categories/${categoryId}`);
    updateDoc(docRef, { todoCount: increment(1) })
      .then(() => {
        console.log('Todo count incremented');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
    
    return addDoc(dbInstance,data);
  }

  loadTodos(categoryId:string){
    const dbInstance = collection(this.firestore,`categories/${categoryId}/todos`);
    return collectionData(dbInstance,{idField:'id'});
  }

  updateTodo(categoryId:string,todoId:string,data:object){
    const docInstance = doc(this.firestore,`categories/${categoryId}/todos`,todoId);
    return updateDoc(docInstance,data);
  }

  deleteTodo(categoryId:string,todoId:string){
    const docInstance = doc(this.firestore,`categories/${categoryId}/todos`,todoId);

    const docRef = doc(this.firestore, `categories/${categoryId}`);
    updateDoc(docRef, { todoCount: increment(-1) })
      .then(() => {
        console.log('Todo count Decremented');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });

    return deleteDoc(docInstance)
  }

  markCompleted(categoryId:string,todoId:string){
    const docRef = doc(this.firestore, `categories/${categoryId}/todos/${todoId}`);
    return updateDoc(docRef, { isCompleted: true })
  }

  markIncompleted(categoryId:string,todoId:string){
    const docRef = doc(this.firestore, `categories/${categoryId}/todos/${todoId}`);
    return updateDoc(docRef, { isCompleted: false })
  }
}
