import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

interface ITodoCategory{
  category: string,
  colorCode: string,
  todoCount:number
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  color:Array<any> = ["#e7845e","#fc0184","#f6b93f","9224a7","20c898","#f03734","#aad450","#026467","#fefefe",
    "#D28779","#D4D2A5","#FCDEBE","#90A583","#B26E63","#C6CAED"
  ];

  constructor(private CategoryService:CategoryService,private toastr:ToastrService){}

  onSubmit(values: {categoryName:string}){
    
    let randomNumber = Math.floor(Math.random() * this.color.length);

    const todoCategory : ITodoCategory = {
      category: values.categoryName,
      colorCode: this.color[randomNumber],
      todoCount:0
    }

    console.log(todoCategory);
    this.CategoryService.saveCategory(todoCategory).then(()=>{
      this.toastr.success("New Category Saved Successfully","Saved Successfully");
    }).catch(err=>{
      console.log(err);
    })
  }
}
