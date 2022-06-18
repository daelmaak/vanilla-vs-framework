import { register } from './template-engine.js';

const getInstance = register(`
  <section class="cart">
    <h2>Cart</h2>
    <ul></ul>
  </section>
`);

export class Cart {
  constructor(products = new Map()) {
    this.products = products;
  }

  addProduct(product) {
    if (!this.products.has(product.id)) {
      this.products.set(product.id, {
        quantity: 0,
        product,
      });
    }
    this.products.get(product.id).quantity++;

    this.render();
  }

  async render() {
    if (!this.$cart) {
      this.$cart = (await getInstance()).querySelector('.cart');
    }

    const $cartItems = await this.#renderCartItems();
    this.$cart.querySelector('ul').replaceChildren(...$cartItems);

    return this.$cart;
  }

  #onQuantityChange(product, quantity) {
    if (quantity <= 0) {
      this.products.delete(product.id);
    } else {
      this.products.get(product.id).quantity = quantity;
    }
  }

  async #renderCartItems() {
    if (this.products.size == 0) {
      return [];
    }

    const { CartItem } = await import('./cart-item.js');

    const $cartItems$ = Array.from(this.products.values()).map((v) => {
      const cartItem = new CartItem(v.product, v.quantity, {
        onQuantityChange: (p, q) => this.#onQuantityChange(p, q),
      });
      return cartItem.render();
    });

    return Promise.all($cartItems$);
  }
}
