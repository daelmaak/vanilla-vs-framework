import './ProductList.css';
import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { cartModel } from './models/cart-model';

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              onProductSelected={() => cartModel.addCartItem(product, 1)}
            ></ProductCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

function fetchProducts() {
  return fetch('http://localhost:3000/products').then((res) => res.json());
}
