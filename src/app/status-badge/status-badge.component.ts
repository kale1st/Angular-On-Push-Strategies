import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBadgeComponent {
  @Input() status: 'active' | 'inactive' | 'pending' = 'pending';
  @Input() label: string = '';
  @Input() quantity: number = 0;

  get debugOutput() {
    console.log('[StatusBadge] evaluated');
    return 'Status Badge Debug';
  }

  get stockStatus(): string {
    if (this.quantity > 30) return 'Good Stock';
    if (this.quantity > 10) return 'Low Stock';
    return 'Critical';
  }

  get statusClass(): string {
    if (this.quantity > 30) return 'good';
    if (this.quantity > 10) return 'warning';
    return 'critical';
  }
}
