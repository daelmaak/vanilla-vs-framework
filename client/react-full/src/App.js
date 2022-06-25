import './App.css';
import { useRef } from 'react';
import { Cart } from './Cart';
import { ProductList } from './ProductList';

function App() {
  const cartRef = useRef();

  function onProductSelected(product) {
    cartRef.current.addProduct(product);
  }

  return (
    <div className="app">
      <Cart ref={cartRef} />
      <ProductList onProductSelected={onProductSelected} />
    </div>
  );
}

export default App;
