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

@NgModule({
  declarations: [
    AppComponent,
    PromotionBarComponent,
    MainNavComponent,
    MainLayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
