import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailBasketComponent } from './components/product-detail-basket/product-detail-basket.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { ProductCatalogComponent } from './pages/product-catalog/product-catalog.component';
import { ProductInfoCardComponent } from './components/product-info-card/product-info-card.component';

@NgModule({
  declarations: [
    ProductSidebarComponent,
    ProductGridItemComponent,
    ProductCatalogComponent,
    ProductInfoCardComponent,
    ProductDetailBasketComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ProductCatalogComponent
  ]
})
export class ProductsModule { }
