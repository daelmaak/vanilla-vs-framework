import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  products$ = new BehaviorSubject<Product[]>([]);
  page = 1;
  size = 40;

  constructor(private http: HttpClient) {}

  loadProducts(page = this.page, size = this.size) {
    if (page < 1) {
      return;
    }

    this.page = page;
    this.size = size;

    this.http
      .get<Product[]>(`http://localhost:3000/products`, {
        params: {
          page,
          size,
        },
      })
      .subscribe((products) => this.products$.next(products));
  }
}
