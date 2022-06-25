import { makeAutoObservable } from 'mobx';

class CartModel {
  _cartItems = new Map();

  constructor() {
    makeAutoObservable(this);
  }

  get cartItems() {
    return Array.from(this._cartItems.values());
  }

  addCartItem(product) {
    if (!this._cartItems.has(product.id)) {
      this._cartItems.set(product.id, {
        quantity: 0,
        product,
      });
    }
    this._cartItems.get(product.id).quantity++;
  }

  updateItemQuantity(productId, delta) {
    const item = this._cartItems.get(productId);

    if ((item.quantity += delta) <= 0) {
      this._cartItems.delete(productId);
    }
  }
}

export const cartModel = new CartModel();
