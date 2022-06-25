import './CartItem.css';

export default function CartItem({ product, quantity, onQuantityChange }) {
  return (
    <article className="cart-item">
      <h3>{product.name}</h3>
      <span>{quantity}</span>
      <button onClick={() => onQuantityChange(1)}>+</button>
      <button onClick={() => onQuantityChange(-1)}>-</button>
    </article>
  );
}
