import { Component} from '@angular/core';
import { ProductsService } from '../services/products.service';
import { serverUrl } from '../../config';
import { ProductComponent } from "../components/product/product.component";
import {Product} from "../../types";
import { CommonModule } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  constructor(
    private productService: ProductsService
  ) {}

  products: Product[] = [];
  totalRecords: number = 0;
  rows = 5; 
  fetchProducts(page: number, perPage: number) {
    this.productService.getProducts(`${serverUrl}/clothes`, {page, perPage}).subscribe((product) => {
      this.products = product.items;
      this.totalRecords = product.total;
    })
  }

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }

  onProductOutput(product: Product) {
    console.log(product, 'Output');
  }

  onPageChange(event: PaginatorState) {
    this.fetchProducts(event.page ?? 0, event.rows ?? this.rows);
  }


}
