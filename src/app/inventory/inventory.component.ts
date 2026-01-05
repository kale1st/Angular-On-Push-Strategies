import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AddProductComponent } from './add-product/add-product.component';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, InventoryListComponent, AddProductComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Keyboard', price: 89 },
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  products$ = this.productsSubject.asObservable();

  get debugOutput() {
    console.log('[InventoryComponent] evaluated');
    return 'Inventory Debug';
  }

  addProduct(product: Product) {
    product.id = Math.max(...this.products.map(p => p.id), 0) + 1;
    this.products = [...this.products, product];
    this.productsSubject.next(this.products);
  }
}
