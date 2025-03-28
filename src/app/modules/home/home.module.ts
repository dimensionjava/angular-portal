import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FeaturedProductComponent } from './components/featured-product/featured-product.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    CarouselComponent,
    FeaturedProductComponent,
    CompanyInfoComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    FeaturedProductComponent,
    CompanyInfoComponent
  ]
})
export class HomeModule { }
