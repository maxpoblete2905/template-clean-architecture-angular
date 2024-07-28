import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { products } from '@shared/constants/products-items';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  category: string;
  images: string[];
}

@Component({
  selector: 'app-product-store',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductStoreComponent {
  products: Product[] = products;
  // Handle "View More" button click
  viewMore(product: Product) {
    console.log('View more details for:', product);
  }
}
