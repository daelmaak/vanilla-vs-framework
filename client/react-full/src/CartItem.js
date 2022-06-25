import './CartItem.css';

export function CartItem({ cartEntry, onQuantityChange }) {
  const { product, quantity } = cartEntry;

  return (
    <article className="cart-item">
      <h3>{product.name}</h3>
      <span>{quantity}</span>
      <button onClick={() => onQuantityChange(product.id, 1)}>+</button>
      <button onClick={() => onQuantityChange(product.id, -1)}>-</button>
    </article>
  );
}
