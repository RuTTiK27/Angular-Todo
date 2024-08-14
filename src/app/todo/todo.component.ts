import { Component, ViewChild } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface ITodo{
  todo: string,
  isCompleted: boolean,
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @ViewChild('f',{static:false}) form !:NgForm;

  allTodos !:Observable<Array<any>>
  TodoId !:string;
  todoName !:string;

  dataStatus : string = "Add";

  categoryId :any;

  constructor(private TodoService:TodoService,private toastr:ToastrService,private activatedRoute: ActivatedRoute){
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.categoryId);
    this.loadTodos();
  }
  
  onSubmit(values:{todo:string}){
    const todo : ITodo = {
      todo: values.todo,
      isCompleted: false
    }

    if(this.dataStatus=="Add"){

      this.TodoService.saveTodo(todo,this.categoryId).then(()=>{
        this.form.resetForm();
        this.toastr.success("New Todo Saved Successfully","Saved Successfully");
      }).catch(err=>{
        console.log(err);
      })

    }else if(this.dataStatus=="Edit"){
      this.TodoService.updateTodo(this.categoryId,this.TodoId,{todo:this.todoName}).then(()=>{
        this.form.resetForm();
        this.dataStatus = "Add";
        this.toastr.success("Todo Updated Successfully","Updated Successfully");
      }).catch(err=>{
        console.log(err);
      })
    }

  }

  loadTodos(){
    this.allTodos = this.TodoService.loadTodos(this.categoryId);
  }

  //--------------
  onEdit(todoId:string,todoName:string){
    this.TodoId = todoId;
    this.todoName = todoName;
    this.dataStatus = "Edit";
  }

  //--------------
  deleteTodo(todoId:string){
    this.TodoService.deleteTodo(this.categoryId,todoId).then(()=>{
      this.toastr.error("Todo Deleted Successfully","Deleted Successfully");

    }).catch(err=>{
      console.log(err);
      
    })
  }

  //---
  markCompleted(todoId:string){
    this.TodoService.markCompleted(this.categoryId,todoId).then(() => {
      this.toastr.info("Todo Makred Completed","Marked Successfully");
    })
    .catch((error) => {
      console.error('Error updating document: ', error);
    });
  }

  //---
  markIncompleted(todoId:string){
    this.TodoService.markIncompleted(this.categoryId,todoId).then(() => {
      this.toastr.info("Todo Makred Incompleted","Marked Successfully");
    })
    .catch((error) => {
      console.error('Error updating document: ', error);
    });
  }
}
