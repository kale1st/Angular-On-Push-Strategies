import { Component } from '@angular/core';

import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';
import { InventoryComponent } from './inventory/inventory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [StockTrackerComponent, InventoryComponent],
})
export class AppComponent {
  get debugOutput() {
    console.log('[AppComponent] debugOutput evaluated');
    return 'Product Dashboard Debug';
  }
}
