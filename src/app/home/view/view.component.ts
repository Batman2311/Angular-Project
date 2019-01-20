import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';
import { Category } from 'src/app/model/categories-model';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  categories: Category[];
  searchCategoryByName: any;

  constructor(public categoriesService: CategoriesService) {
    this.getCategories()
  }

  ngOnInit() {
  }

  getCategories() {
    this.categoriesService.getCategory().subscribe(
      data => {
        this.categories = data;
      }
    )
  }

  deleteCategories(categories: Category): void {
    this.categoriesService.deleteCategory(categories).subscribe(
      data => {
        this.getCategories();
      }
    )
  }

  searchCategories() {
    this.categoriesService.searchByName(this.searchCategoryByName).subscribe(
      data => {
        this.categories = data;
      }
    )
  }


}
