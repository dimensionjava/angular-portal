import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ProductCatalogComponent } from './modules/products/pages/product-catalog/product-catalog.component';

const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'product',component: ProductCatalogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
