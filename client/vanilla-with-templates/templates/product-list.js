import { ProductCard } from './product-card.js';
import { register } from './template-engine.js';

const productListCx = 'product-list';

const getInstance = register(`
  <div class="${productListCx}">
    <h2>Products</h2>
    <ul></ul>
  </div
`);

export class ProductList {
  constructor(products = [], options) {
    this.products = products;
    this.options = options;
  }

  async render() {
    this.$productList = (await getInstance()).querySelector(
      `.${productListCx}`
    );

    const $productCards = await this.#renderProductCards();
    $productCards.forEach(($card) =>
      this.$productList.querySelector('ul').appendChild($card)
    );

    return this.$productList;
  }

  async update(products = []) {
    this.products = products;

    const $productCards = await this.#renderProductCards();
    this.$productList.querySelector('ul').replaceChildren(...$productCards);
  }

  #renderProductCards() {
    return Promise.all(
      this.products.map((product) => {
        const productCard = new ProductCard(product, {
          onCardClick: (p) => {
            this.options.onProductSelected(p);
          },
        });
        return productCard.render();
      })
    );
  }
}
