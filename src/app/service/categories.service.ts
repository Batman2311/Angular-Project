import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Category } from '../model/categories-model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class CategoriesService {
  constructor(private http: HttpClient) { }
  api: string = 'http://127.0.0.1:3000/categories';

  getCategory() {
    return this.http.get<Category[]>(this.api);
  }

  addNewCategories(category: Category) {
    return this.http.post(this.api, category)
  }

  deleteCategory(category) {
    return this.http.delete(this.api + '/' + category)
  }

  searchByName(name): Observable<any> {
    return this.http.get(this.api + '?filter[where][name]=' + name)
  }

}
