const nameCx = 'cart-item-name';
const increaseBtnCx = 'cart-item-increase';
const decreaseBtnCx = 'cart-item-decrease';
const quantityCx = 'cart-item-quantity';

export class CartItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/cart-item.css">
      <article>
        <h3 class="${nameCx}">...</h3>
        <output class="${quantityCx}"></output>
        <button class="${increaseBtnCx}">+</button>
        <button class="${decreaseBtnCx}">-</button>
      </article>
    `;

    this.$quantity = this.shadowRoot.querySelector(`.${quantityCx}`);
    this.shadowRoot
      .querySelector(`.${increaseBtnCx}`)
      .addEventListener('click', () => this.#onQuantityChange(1));
    this.shadowRoot
      .querySelector(`.${decreaseBtnCx}`)
      .addEventListener('click', () => this.#onQuantityChange(-1));
  }

  connectedCallback() {
    const { product, quantity } = this.data;

    this.product = product;

    this.shadowRoot.querySelector(`.${nameCx}`).textContent = this.product.name;
    this.updateQuantityBy(quantity);
  }

  updateQuantityBy(change) {
    const newValue = +this.$quantity.value + change;

    return (this.$quantity.value = newValue);
  }

  #onQuantityChange(change) {
    const quantity = this.updateQuantityBy(change);
    this.dispatchEvent(
      new CustomEvent('change-cart-product-quantiy', { detail: quantity })
    );
  }
}

customElements.define('isy-cart-item', CartItem);
