import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ProductCatalogComponent } from './modules/products/pages/product-catalog/product-catalog.component';
import { ContactPageComponent } from './modules/contact/page/contact-page/contact-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login',component: LoginComponent},

  {path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard]},
  // {path: 'product',component: ProductCatalogComponent},
  {path: 'contact',
    component: ContactPageComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'product',
    loadChildren: ()=> import ('./modules/products/products.module')
    .then(m=> m.ProductsModule),
    canActivate: [AuthGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
