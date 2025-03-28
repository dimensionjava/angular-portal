import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailBasketComponent } from './product-detail-basket.component';

describe('ProductDetailBasketComponent', () => {
  let component: ProductDetailBasketComponent;
  let fixture: ComponentFixture<ProductDetailBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDetailBasketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDetailBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
