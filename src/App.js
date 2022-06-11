import React, { useState } from "react";
import Coffee from "./components/Coffee/Coffee";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Coffee />
      </main>
    </CartProvider>
  );
}

export default App;
