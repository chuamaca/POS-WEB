import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {

    //cuando este en este modlo que levante el conponente
    path: '',
    component: CategoryListComponent,
    data: {
      scrollDisabled: true,
      toolbaerShadowEnabled: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
