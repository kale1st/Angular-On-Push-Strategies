import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../inventory.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {
  @Output() onAddProduct = new EventEmitter<Product>();

  form: FormGroup;

  get debugOutput() {
    console.log('[AddProduct] evaluated');
    return 'Add Product Debug';
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]],
    });
  }

  addNewProduct() {
    if (this.form.valid) {
      this.onAddProduct.emit({
        id: 0,
        name: this.form.value.name,
        price: this.form.value.price,
      });
      this.form.reset();
    }
  }
}
