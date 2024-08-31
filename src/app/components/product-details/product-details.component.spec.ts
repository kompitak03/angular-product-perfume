import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductDetailsComponent } from './product-details.component';
import { Product } from '../../core/const/product';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('productDetails', Product);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should display product category when productDetails.category is not empty', () => {
    const category = 'Test Category';
    fixture.componentRef.setInput('productDetails', { category });
    fixture.detectChanges();
    const categoryElement = fixture.nativeElement.querySelector('.product__category');
    expect(categoryElement.textContent).toBe(category);
  });
  
  it('should not display product category when productDetails.category is empty', () => {
    const category = '';
    fixture.componentRef.setInput('productDetails', { category });
    fixture.detectChanges();
    const categoryElement = fixture.nativeElement.querySelector('.product__category');
    expect(categoryElement.textContent).toBe('');
  });
  
  it('should display product title when productDetails.title is not empty', () => {
    const title = 'Test Title';
    fixture.componentRef.setInput('productDetails', { title });
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.product__title');
    expect(titleElement.textContent).toContain(title);
  });
  
  it('should not display product title when productDetails.title is empty', () => {
    const title = '';
    fixture.componentRef.setInput('productDetails', { title });
    fixture.detectChanges();
    const titleElement = fixture.nativeElement.querySelector('.product__title');
    expect(titleElement.textContent).toContain('');
  });
  
  it('should display product details when productDetails.details is not empty', () => {
    const details = 'Test Details';
    fixture.componentRef.setInput('productDetails', { details });
    fixture.detectChanges();
    const detailsElement = fixture.nativeElement.querySelector('.product__details');
    expect(detailsElement.textContent).toContain(details);
  });
  
  it('should not display product details when productDetails.details is empty', () => {
    const details = '';
    fixture.componentRef.setInput('productDetails', { details });
    fixture.detectChanges();
    const detailsElement = fixture.nativeElement.querySelector('.product__details');
    expect(detailsElement.textContent).toContain('');
  });
  
  it('should display product price when productDetails.price is not empty', () => {
    const price = 10.99;
    fixture.componentRef.setInput('productDetails', { price });
    fixture.detectChanges();
    const priceElement = fixture.nativeElement.querySelector('.product__price');
    expect(priceElement.textContent).toContain(price.toString());
  });
  
  it('should not display product price when productDetails.price is empty', () => {
    const price = '';
    fixture.componentRef.setInput('productDetails', { price });
    fixture.detectChanges();
    const priceElement = fixture.nativeElement.querySelector('.product__price');
    expect(priceElement.textContent).toContain('');
  });
  
  it('should display product original price when productDetails.originalPrice is not empty', () => {
    const originalPrice = 12.99;
    fixture.componentRef.setInput('productDetails', { originalPrice });
    fixture.detectChanges();
    const originalPriceElement = fixture.nativeElement.querySelector('.product__original-price');
    expect(originalPriceElement.textContent).toContain(originalPrice.toString());
  });
});
