import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { ContactPageComponent } from './modules/contact/page/contact-page/contact-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
// Importamos las rutas desde el modulo de productos
import { productRoutes } from './modules/products/products-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a login inicialmente
  { path: 'login', component: LoginComponent }, // Ruta para el login
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard] // Protegemos con AuthGuard
  },
  {
    path: 'product',
    children: productRoutes, // Incluimos las rutas del módulo de productos
    canActivate: [AuthGuard] // Protegemos con AuthGuard
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    canActivate: [AuthGuard] // Protegemos con AuthGuard
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
