import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

interface ITodoCategory{
  category: string,
  colorCode: string,
  todoCount:number
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  color:Array<any> = ["#e7845e","#fc0184","#f6b93f","9224a7","20c898","#f03734","#aad450","#026467","#fefefe",
    "#D28779","#D4D2A5","#FCDEBE","#90A583","#B26E63","#C6CAED"
  ];
  
  @ViewChild('f',{static:false}) form !:NgForm;

  allCategories !:Observable<Array<any>>
  categoryId !:string;
  categoryName !:string;

  dataStatus : string = "Add";

  constructor(private CategoryService:CategoryService,private toastr:ToastrService){
    this.loadCategories();
  }

  onSubmit(values: {categoryName:string}){

    let randomNumber = Math.floor(Math.random() * this.color.length);
    const todoCategory : ITodoCategory = {
      category: values.categoryName,
      colorCode: this.color[randomNumber],
      todoCount:0
    }

    if(this.dataStatus=="Add"){
      this.CategoryService.saveCategory(todoCategory).then(()=>{
        this.form.resetForm();
        this.toastr.success("New Category Saved Successfully","Saved Successfully");
      }).catch(err=>{
        console.log(err);
      })
    }else if(this.dataStatus=="Edit"){
      this.CategoryService.updateCategory(this.categoryId,{category:this.categoryName}).then(()=>{
        this.form.resetForm();
        this.dataStatus = "Add";
        this.toastr.success("Category Updated Successfully","Updated Successfully");
      }).catch(err=>{
        console.log(err);
      })
    }  
    
  }

  loadCategories(){
    this.allCategories = this.CategoryService.loadCategories();
  }

  //--------------
  onEdit(categoryId:string,categoryName:string){
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.dataStatus = "Edit";
  }

  //--------------
  deleteCategory(id:string){
    this.CategoryService.deleteCategory(id).then(()=>{
      this.toastr.error("Category Deleted Successfully","Deleted Successfully");

    }).catch(err=>{
      console.log(err);
      
    })
  }



}
