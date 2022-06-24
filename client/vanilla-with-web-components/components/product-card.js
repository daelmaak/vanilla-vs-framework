const productNameCx = 'product-name';

export class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/product-card.css">
      <article> 
        <span class="${productNameCx}"></span>
      </article> 
    `;
  }

  connectedCallback() {
    this.#update();
  }

  #update() {
    const { product } = this.data;

    this.shadowRoot.querySelector(`.${productNameCx}`).textContent =
      product.name;

    this.shadowRoot.addEventListener('click', () =>
      this.dispatchEvent(
        new CustomEvent('add-product-to-cart', {
          detail: product,
          bubbles: true,
          composed: true,
        })
      )
    );
  }
}

customElements.define('isy-product-card', ProductCard);
