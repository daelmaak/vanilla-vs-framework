class ProductListModel {
  constructor() {
    this.products = [];
    this.page = 1;
    this.size = 40;
    this.callbacks = [];
  }

  async load() {
    this.products = await this.#fetchProducts(this.page, this.size);
    this.#notify({
      products: this.products,
      page: this.page,
      size: this.size,
    });
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

  subscribe(cb) {
    this.callbacks.push(cb);
  }

  async #fetchProducts(page, size) {
    const res = await fetch(
      `http://localhost:3000/products?page=${page}&size=${size}`
    );
    return res.json();
  }

  async #notify(changes) {
    this.callbacks.forEach((cb) => cb(changes));
  }
}

export const productListModel = new ProductListModel();
