import React, { createContext, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './stores/CartProvider';

const onShowCart = createContext();

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  }

  const closeCart = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClickCloseButton={closeCart} />}
      <onShowCart.Provider value={showCart} >
        <Header title="IndianRestaurant" />
      </onShowCart.Provider>
      <Meals />
    </CartProvider>
  );
}

export default App;
export { onShowCart };
