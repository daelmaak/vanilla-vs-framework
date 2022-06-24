import './product-card.js';

export class ProductList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/product-list.css">
      <h2>Products</h2>
      <ul></ul>
    `;
  }

  async connectedCallback() {
    this.products = await this.#fetchProducts();
    this.#update();
  }

  #update() {
    const $products = this.products.map((product) => {
      const $card = document.createElement('isy-product-card');
      $card.data = { product };
      return $card;
    });
    this.shadowRoot.querySelector('ul').replaceChildren(...$products);
  }

  async #fetchProducts() {
    const res = await fetch('http://localhost:3000/products');
    return res.json();
  }
}

customElements.define('isy-product-list', ProductList);
