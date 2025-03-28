import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailBasketComponent } from './components/product-detail-basket/product-detail-basket.component';
import { ProductDetailCardComponent } from './components/product-detail-card/product-detail-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductDetailBasketComponent,
    ProductDetailCardComponent,
    ProductCardComponent,
    ProductSidebarComponent,
    ProductsListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ProductsListComponent
  ]
})
export class ProductsModule { }
