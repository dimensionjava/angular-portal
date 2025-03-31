import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroSliderComponent } from './components/hero-slider/hero-slider.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';

@NgModule({
  declarations: [
    HeroSliderComponent,
    FeaturedProductsComponent,
    CompanyInfoComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class HomeModule { }
