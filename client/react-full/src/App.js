import './App.css';
import { Cart } from './Cart';
import { ProductList } from './ProductList';
import { cartModel } from './models/cart.model';
import { productListModel } from './models/product-list.model';

function App() {
  return (
    <div className="app">
      <Cart cartModel={cartModel} />
      <ProductList productListModel={productListModel} />
    </div>
  );
}

export default App;
