import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;
  dataLoaded = false;
  constructor(private categoriySevice: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoriySevice.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
  setCurrentAllCategory(){}

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllCategoryClass(){
    
    if(!this.currentCategory){
      return 'list-group-item active';
    }
    else{
      return 'list-group-item';
    }
  }
}
