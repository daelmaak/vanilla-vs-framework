import './Cart.css';
import { lazy, Suspense } from 'react';
import { observer } from 'mobx-react';

const CartItem = lazy(() => import('./CartItem'));

export const Cart = observer(({ cartModel }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartModel.cartItems.map(({ product, quantity }) => (
          <li key={product.id}>
            <Suspense>
              <CartItem
                product={product}
                quantity={quantity}
                onQuantityChange={(delta) =>
                  cartModel.updateItemQuantity(product.id, delta)
                }
              />
            </Suspense>
          </li>
        ))}
      </ul>
    </div>
  );
});
