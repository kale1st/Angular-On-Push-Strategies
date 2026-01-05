import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../inventory.component';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryListComponent {
  @Input() productList: Product[] = [];
  @Input() products$?: Observable<Product[]>;
  @Input() sortBy: 'name' | 'stock' | 'price' = 'name';

  get debugOutput() {
    console.log('[InventoryList] evaluated');
    return 'Inventory List Debug';
  }

  trackById(index: number, item: Product) {
    return item.id;
  }
}
