import './ProductCard.css';

export function ProductCard({ product, onProductSelected }) {
  return (
    <article className="product-card" onClick={onProductSelected}>
      <span className="product-name">{product.name}</span>
    </article>
  );
}
