import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImageComponent } from './product-image.component';
import { ElementRef, NO_ERRORS_SCHEMA, Renderer2 } from '@angular/core';
import { Product } from '../../core/const/product';

describe('ProductImageComponent', () => {
  let component: ProductImageComponent;
  let fixture: ComponentFixture<ProductImageComponent>;
  let renderer: Renderer2;
  let elementRef: ElementRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [Renderer2],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductImageComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('productImage', Product);
    fixture.detectChanges();

    renderer = TestBed.inject(Renderer2);
    elementRef = new ElementRef(null);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product image when productImage is set', () => {
    const productImage = 'https://example.com/image.jpg';
    fixture.componentRef.setInput('productImage', {
      mobileImage: productImage,
    });
    fixture.detectChanges();
    const imageElement = fixture.nativeElement.querySelector('img');
    expect(imageElement.src).toBe(productImage);
  });

  it('should not display product image when productImage is not set', () => {
    const productImage = '';
    fixture.componentRef.setInput('productImage', {
      mobileImage: productImage,
    });
    fixture.detectChanges();
    const imageElement = fixture.nativeElement.querySelector('img');
    expect(imageElement.src).toBe(`${window.location.origin}/${productImage}`);
  });

  it('should display product image when productImage is set and mobileImage is not set', () => {
    const productImage = 'https://example.com/image.jpg';
    fixture.componentRef.setInput('productImage', {
      desktopImage: productImage,
    });
    fixture.detectChanges();
    const imageElement = fixture.nativeElement.querySelector('img');
    expect(imageElement.src).toBe(`${window.location.origin}/`);
  });

  it('should not display product image when productImage is not set and mobileImage is not set', () => {
    const productImage = '';
    fixture.componentRef.setInput('productImage', {
      desktopImage: productImage,
    });
    fixture.detectChanges();
    const imageElement = fixture.nativeElement.querySelector('img');
    expect(imageElement.src).toBe(`${window.location.origin}/${productImage}`);
  });
});
