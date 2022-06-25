import './cart.js';
import './product-list.js';

class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/app.css">
      <isy-cart></isy-cart>
      <isy-product-list></isy-product-list>
    `;

    this.$cart = this.shadowRoot.querySelector('isy-cart');
  }

  connectedCallback() {
    this.shadowRoot.addEventListener('add-product-to-cart', (e) =>
      this.#onProductSelected(e.detail)
    );
  }

  #onProductSelected(product) {
    this.$cart.addItem(product);
  }
}

customElements.define('isy-app', App);
