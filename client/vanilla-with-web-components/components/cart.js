import './cart-item.js';

class Cart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.products = new Map();

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/cart.css">
      <h2>Cart</h2>
      <ul></ul>
    `;
  }

  addProduct(product) {
    if (!this.products.has(product.id)) {
      this.products.set(product.id, {
        quantity: 0,
        product,
      });
    }
    this.products.get(product.id).quantity++;

    this.#update();
  }

  #onQuantityChange(product, quantity) {
    if (quantity <= 0) {
      this.products.delete(product.id);
    } else {
      this.products.get(product.id).quantity = quantity;
    }
  }

  #update() {
    const $products = Array.from(this.products.values()).map(
      ({ product, quantity }) => {
        const $card = document.createElement('isy-cart-item');

        $card.data = { product, quantity };
        $card.addEventListener('change-cart-product-quantiy', (e) =>
          this.#onQuantityChange(product, e.detail)
        );

        return $card;
      }
    );
    this.shadowRoot.querySelector('ul').replaceChildren(...$products);
  }
}

customElements.define('isy-cart', Cart);
