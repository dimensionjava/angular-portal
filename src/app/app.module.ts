import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { PromotionBarComponent } from './layout/components/promotion-bar/promotion-bar.component';
import { MainNavComponent } from './layout/components/main-nav/main-nav.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { MainLayoutComponent } from './layout/components/main-layout/main-layout.component';

import { HomeModule } from './modules/home/home.module';
import { ProductsModule } from './modules/products/products.module';
import { ContactModule } from './modules/contact/contact.module';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PromotionBarComponent,
    MainNavComponent,
    MainLayoutComponent,
    FooterComponent,
    LoginComponent // Agregamos el componente de login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ProductsModule,
    ContactModule,
    HttpClientModule, // Necesario para las peticiones HTTP de autenticación
    ReactiveFormsModule, // Para el formulario de login
    CommonModule,   //todo: es necesario importalo?
    FormsModule // Para el formulario de login con ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
