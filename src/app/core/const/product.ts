import { ProductDetails } from '../models/product-details.model';
import { ProductImage } from '../models/product-image.model';

export const Product: ProductDetails & ProductImage = {
  mobileImage: './assets/images/image-product-mobile.jpg',
  desktopImage: './assets/images/image-product-desktop.jpg',
  category: 'Perfume',
  title: 'Gabrielle Essence Eau De Parfum',
  details:
    'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
  price: '149.99',
  originalPrice: '169.99',
  currency: '$',
};
