import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { CartItem } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems$ = new BehaviorSubject(new Map<string, CartItem>());

  get cartItems() {
    return this.cartItems$.getValue();
  }

  set cartItems(items: Map<string, CartItem>) {
    this.cartItems$.next(items);
  }

  addProduct(product: Product) {
    const cartItem = this.cartItems.get(product.id);

    if (cartItem) {
      this.updateQuantity(product, cartItem.quantity + 1);
    } else {
      this.cartItems = this.cartItems.set(product.id, { product, quantity: 1 });
    }
  }

  updateQuantity(product: Product, quantity: number) {
    let cartItem = this.cartItems.get(product.id);

    if (!cartItem) {
      return;
    }

    if (quantity <= 0) {
      this.cartItems.delete(product.id);
      this.cartItems = new Map(this.cartItems);
      return;
    }

    cartItem = {
      ...cartItem,
      quantity,
    };
    this.cartItems = this.cartItems.set(product.id, cartItem);
  }
}
