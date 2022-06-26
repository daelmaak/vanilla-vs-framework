import './product-card.js';
import './pager.js';
import { productListModel } from '../models/product-list.model.js';

export class ProductList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/product-list.css">
      <h2>Products</h2>
      <isy-pager></isy-pager>
      <ul></ul>
      <isy-pager></isy-pager>
    `;

    this.shadowRoot.querySelectorAll('isy-pager').forEach((pager) => {
      pager.init(productListModel);
    });
  }

  async connectedCallback() {
    productListModel.subscribe((_) => this.#update());
    await productListModel.load();
  }

  #update() {
    const $products = productListModel.products.map((product) => {
      const $li = document.createElement('li');
      const $card = document.createElement('isy-product-card');
      $card.data = { product };

      $li.appendChild($card);
      return $li;
    });
    this.shadowRoot.querySelector('ul').replaceChildren(...$products);
  }
}

customElements.define('isy-product-list', ProductList);
