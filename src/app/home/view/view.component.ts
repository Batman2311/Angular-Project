import { Component, OnInit, TemplateRef } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';
import { Category } from 'src/app/model/categories-model';
import { ToastrService } from 'ngx-toastr';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
  
})
export class ViewComponent implements OnInit {

  modalRef: BsModalRef;
  message: string;
  categories: Category[];
  searchCategoryByName: any;

  constructor(public categoriesService: CategoriesService, private toastr: ToastrService, private modalService: BsModalService) {
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
        this.toastr.success(`Category is deleted.`);
        this.getCategories();
        this.modalRef.hide();

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
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }
 
  confirm(): void {
    this.modalRef.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }
}

