import './App.css';
import { Cart } from './Cart';
import { ProductList } from './ProductList';
import { cartModel } from './models/cart-model';

function App() {
  return (
    <div className="app">
      <Cart cartModel={cartModel} />
      <ProductList />
    </div>
  );
}

export default App;
