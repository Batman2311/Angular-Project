import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';
import { Category } from 'src/app/model/categories-model';
import { ICategories } from "src/app/model/ICategories";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  category = []; // need to be fixed..!
  categories: Category[];
  searchName: any;

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

  deleteCategory(categories: ICategories): void {
    this.categoriesService.deleteCategories(categories).subscribe(
      data => {
        this.getCategories();
      }
    )
  }

  searchCategory() {
    this.categoriesService.searchByName(this.searchName).subscribe(
      data => {
        this.category = data;
      }
    )
  }


}
