import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCatalogComponent } from './pages/product-catalog/product-catalog.component';
import { HerramientaComponent } from './components/herramienta/herramienta.component';
import { CalzadoComponent } from './components/calzado/calzado.component';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';

const routes: Routes = [
  {
    path: '',
    component: ProductCatalogComponent,
    children: [
      {
        path: 'herramienta',
        component: HerramientaComponent
      },
      {
        path: "calzado",
        component: CalzadoComponent
      },
      {
        path: "producto",
        component: ProductGridItemComponent
      }
    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
