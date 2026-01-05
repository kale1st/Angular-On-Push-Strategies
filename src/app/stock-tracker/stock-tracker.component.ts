import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusBadgeComponent } from '../status-badge/status-badge.component';

@Component({
  selector: 'app-stock-tracker',
  standalone: true,
  imports: [CommonModule, StatusBadgeComponent],
  templateUrl: './stock-tracker.component.html',
  styleUrl: './stock-tracker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockTrackerComponent implements OnChanges {
  @Input() productId: number = 0;
  @Input() currentStock: number = 50;
  @Input() minStock: number = 20;

  lowStockWarning = false;

  get debugOutput() {
    console.log('[StockTracker] evaluated');
    return 'Stock Tracker Debug';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentStock'] || changes['minStock']) {
      this.checkStockLevel();
    }
  }

  private checkStockLevel() {
    this.lowStockWarning = this.currentStock < this.minStock;
  }

  increaseStock() {
    this.currentStock++;
    this.checkStockLevel();
  }

  decreaseStock() {
    if (this.currentStock > 0) {
      this.currentStock--;
      this.checkStockLevel();
    }
  }
}
