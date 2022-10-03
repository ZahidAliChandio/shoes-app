import React, { useState } from 'react';
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header';
import Shoes from './components/Shoes/Shoes'
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  }
  const hideCartHandler = () => {
    setCartShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Shoes />
      </main>
    </CartProvider>
  );
}

export default App;
