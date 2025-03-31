import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';



@NgModule({
  declarations: [
    ContactFormComponent,
    ContactInfoComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
