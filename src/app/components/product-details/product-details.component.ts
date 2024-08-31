import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductDetails } from '../../core/models/product-details.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  productDetails = input.required<ProductDetails>();
}
