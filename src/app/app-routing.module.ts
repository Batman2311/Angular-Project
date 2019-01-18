import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './home/view/view.component';
import { AddEditComponent } from './home/add-edit/add-edit.component';

const routes: Routes = [
  {path: 'Category' , component: ViewComponent },
  {path: 'Add-Category' , component: AddEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
