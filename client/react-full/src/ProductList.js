import './ProductList.css';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { cartModel } from './models/cart.model';
import { Pager } from './Pager';
import { ProductCard } from './ProductCard';

export const ProductList = observer(({ productListModel }) => {
  useEffect(() => {
    productListModel.load();
  }, [productListModel]);

  return (
    <div className="product-list">
      <h2>Products</h2>
      <Pager listModel={productListModel} />
      <ul>
        {productListModel.products.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              onProductSelected={() => cartModel.addCartItem(product, 1)}
            ></ProductCard>
          </li>
        ))}
      </ul>
      <Pager listModel={productListModel} />
    </div>
  );
});
