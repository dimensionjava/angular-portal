import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ProductCatalogComponent } from './modules/products/pages/product-catalog/product-catalog.component';
import { ContactPageComponent } from './modules/contact/page/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home',component: HomePageComponent},
  // {path: 'product',component: ProductCatalogComponent},
  {path: 'contact',component: ContactPageComponent},

  {
    path: 'product',
    loadChildren: ()=> import ('./modules/products/products.module')
    .then(m=> m.ProductsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
