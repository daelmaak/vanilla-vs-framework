const templateId = 'product-card';
const productNameCx = 'product-name';

export class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.getElementById(templateId);
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.#init();
  }

  #init() {
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

const template = document.createElement('template');
template.id = templateId;
template.innerHTML = `
  <link rel="stylesheet" href="./components/product-card.css">
  <article> 
    <span class="${productNameCx}"></span>
  </article> 
`;
document.body.append(template);
