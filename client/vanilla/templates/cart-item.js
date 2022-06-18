import { register } from './template-engine.js';

const nameCx = 'cart-item-name';
const increaseBtnCx = 'cart-item-increase';
const decreaseBtnCx = 'cart-item-decrease';
const quantityCx = 'cart-item-quantity';

const getInstance = register(
  `
  <article class="cart-item">
    <h3 class="${nameCx}">Item name</h3>
    <output class="${quantityCx}"></output>
    <button class="${increaseBtnCx}">+</button>
    <button class="${decreaseBtnCx}">-</button>
  </article>
  `,
  '/templates/cart-item.css'
);

export class CartItem {
  constructor(product, quantity, options) {
    this.product = product;
    this.quantity = quantity;
    this.options = options;
  }

  async render() {
    if (!this.$cartItem) {
      this.$cartItem = (await getInstance()).querySelector('article');

      this.$cartItem
        .querySelector(`.${increaseBtnCx}`)
        .addEventListener('click', () => this.#updateQuantity(1));
      this.$cartItem
        .querySelector(`.${decreaseBtnCx}`)
        .addEventListener('click', () => this.#updateQuantity(-1));
    }

    this.$cartItem.querySelector(`.${nameCx}`).textContent = this.product.name;
    this.$cartItem.querySelector(`.${quantityCx}`).value = this.quantity;

    return this.$cartItem;
  }

  #remove() {
    this.$cartItem.remove();
  }

  #updateQuantity(change) {
    this.quantity += change;

    this.options.onQuantityChange(this.product, this.quantity);

    if (this.quantity <= 0) {
      this.#remove();
    } else {
      this.render();
    }
  }
}
