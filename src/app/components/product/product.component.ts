import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  // ! means that it assumes input is provided (be sure to allways provide a product in the html input)
  @Input() product!: Product;
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    this.productOutput.emit(this.product);
  }

  formatPrice(): string {
    const price = Number(this.product.price);
    return  `$${price.toFixed(2)}`;
  }
}
