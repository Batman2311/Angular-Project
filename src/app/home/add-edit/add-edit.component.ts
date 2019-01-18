import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/service/categories.service';
import { Category } from 'src/app/model/categories-model';


@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent {

  name: Category;

  categories: any = {}

  constructor(public categoriesService: CategoriesService, public router: Router) { }

  addCategory() {
    this.categories.name = this.name
    this.categoriesService.addNewCategories(this.categories).subscribe(
      data => {
        this.router.navigate(['Category']);
      }
    )

  }
}
