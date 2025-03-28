import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ProductsListComponent } from './modules/products/pages/products-list/products-list.component';

const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'product',component: ProductsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
