import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductImageComponent } from './components/product-image/product-image.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { Product } from './core/const/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductImageComponent, ProductDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly product = Product;
}
