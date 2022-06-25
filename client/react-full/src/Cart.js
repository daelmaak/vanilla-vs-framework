import './Cart.css';
import { Component } from 'react';
import { CartItem } from './CartItem';

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartEntries: new Map(),
    };
  }

  addProduct(product) {
    if (!this.state.cartEntries.has(product.id)) {
      this.state.cartEntries.set(product.id, {
        quantity: 0,
        product,
      });
    }
    this.state.cartEntries.get(product.id).quantity++;

    this.setState(this.state);
  }

  #onQuantityChange = (productId, change) => {
    const cartEntry = this.state.cartEntries.get(productId);
    cartEntry.quantity += change;
    this.setState(this.state);
  };

  render() {
    return (
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {Array.from(this.state.cartEntries.values())
            .filter(({ quantity }) => quantity > 0)
            .map((ce) => (
              <li key={ce.product.id}>
                <CartItem
                  cartEntry={ce}
                  onQuantityChange={this.#onQuantityChange}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
