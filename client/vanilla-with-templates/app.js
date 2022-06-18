import { Cart } from './templates/cart.js';
import { ProductList } from './templates/product-list.js';

async function fetchProducts() {
  const res = await fetch('http://localhost:3000/products');
  return res.json();
}

export class App {
  constructor() {
    this.$app = document.getElementById('app');
  }

  async render() {
    const cart = new Cart();
    this.$app.appendChild(await cart.render());

    const productList = new ProductList([], {
      onProductSelected: (p) => {
        cart.addProduct(p);
      },
    });
    this.$app.appendChild(await productList.render());

    const products = await this.#fetchProducts();
    productList.update(products);
  }

  #fetchProducts() {
    return fetchProducts();
  }
}

const app = new App();
app.render();
