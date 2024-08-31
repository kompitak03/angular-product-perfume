import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProductImage } from '../../core/models/product-image.model';

@Component({
  selector: 'app-product-image',
  standalone: true,
  imports: [],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductImageComponent {
  productImage = input.required<ProductImage>();
}
