import { register } from './template-engine.js';

const productCardCx = 'product-card';
const productNameCx = 'product-name';

const getInstance = register(`
  <article class="${productCardCx}">
    <span class="${productNameCx}"></span>
  </article>
`);

export class ProductCard {
  constructor(product, config) {
    this.product = product;
    this.config = config;
  }

  async render() {
    const $productCard = (await getInstance()).querySelector(
      `.${productCardCx}`
    );
    $productCard.querySelector(`.${productNameCx}`).textContent =
      this.product.name;
    $productCard.addEventListener('click', (e) =>
      this.config.onCardClick(this.product)
    );

    return $productCard;
  }
}
