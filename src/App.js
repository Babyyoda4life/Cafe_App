import React, { useState } from "react";
import Coffee from "./components/Coffee/Coffee";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  };

  const hideCartHandler = () => {
    setCartShow(false);
  };

  return (
    <>
      {cartShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Coffee />
      </main>
    </>
  );
}

export default App;
