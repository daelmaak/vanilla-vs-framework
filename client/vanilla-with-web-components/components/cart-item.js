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

    this.shadowRoot
      .querySelector(`.${increaseBtnCx}`)
      .addEventListener('click', () => this.#updateQuantity(1));
    this.shadowRoot
      .querySelector(`.${decreaseBtnCx}`)
      .addEventListener('click', () => this.#updateQuantity(-1));
  }

  connectedCallback() {
    const { product, quantity } = this.data;

    this.product = product;
    this.quantity = quantity;
    this.#update();
  }

  #remove() {
    this.remove();
  }

  #update() {
    this.shadowRoot.querySelector(`.${nameCx}`).textContent = this.product.name;
    this.shadowRoot.querySelector(`.${quantityCx}`).value = this.quantity;
  }

  #updateQuantity(change) {
    this.quantity += change;

    if (this.quantity <= 0) {
      this.#remove();
    } else {
      this.#update();
    }
    this.dispatchEvent(
      new CustomEvent('change-cart-product-quantiy', { detail: this.quantity })
    );
  }
}

customElements.define('isy-cart-item', CartItem);
