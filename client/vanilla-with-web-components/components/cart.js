class Cart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.cartItems = new Map();

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/cart.css">
      <h2>Cart</h2>
      <ul></ul>
    `;
  }

  addItem(product) {
    if (!this.cartItems.has(product.id)) {
      this.cartItems.set(product.id, {
        quantity: 0,
        product,
      });
    }
    const item = this.cartItems.get(product.id);
    item.quantity++;

    const $item = this.#getItemElement(product.id);
    if ($item == null) {
      this.#createItemElement(product);
    } else {
      $item.updateQuantityBy(1);
    }
  }

  #createItemElement = async (product) => {
    await import('./cart-item.js');

    const $li = document.createElement('li');
    $li.setAttribute('data-key', product.id);

    const $card = document.createElement('isy-cart-item');
    $card.data = { product, quantity: 1 };
    $card.addEventListener('change-cart-product-quantiy', (e) =>
      this.#onQuantityChange(product, e.detail)
    );
    $li.appendChild($card);

    this.shadowRoot.querySelector('ul').append($li);
  };

  #getItemElement(productId) {
    return this.shadowRoot.querySelector(
      `ul li[data-key="${productId}"] isy-cart-item`
    );
  }

  #onQuantityChange(product, quantity) {
    if (quantity <= 0) {
      this.cartItems.delete(product.id);
      this.#removeItem(product.id);
    } else {
      this.cartItems.get(product.id).quantity = quantity;
    }
  }

  #removeItem(productId) {
    this.#getItemElement(productId).remove();
  }
}

customElements.define('isy-cart', Cart);
