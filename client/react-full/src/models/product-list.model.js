import { action, makeAutoObservable } from 'mobx';

class ProductListModel {
  products = [];
  page = 1;
  size = 40;

  constructor() {
    makeAutoObservable(this);
  }

  async load() {
    const products = await fetchProducts(this.page, this.size);

    action('products fetched', () => {
      this.products = products;
    })();
  }

  loadNext() {
    this.page++;
    this.load();
  }

  loadPrevious() {
    if (this.page === 1) {
      return;
    }
    this.page--;
    this.load();
  }
}

function fetchProducts(page, size) {
  return fetch(`http://localhost:3000/products?page=${page}&size=${size}`).then(
    (res) => res.json()
  );
}

export const productListModel = new ProductListModel();
