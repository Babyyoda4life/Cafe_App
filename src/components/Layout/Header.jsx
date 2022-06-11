import React from "react";
import Hero from "../../assets/hero.jpg";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <>
      <header className="fixed rounded-b-md top-0 left-0 w-full h-20 bg-stone-100 flex justify-between items-center py-0 px-10 shadow-2xl  z-10">
        <h1>CoffeeBudy</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className="w-full h-[25rem] overflow-hidden z-10">
        <img
          className="h-full w-[100%] object-cover "
          src={Hero}
          alt="cup of coffee"
        />
      </div>
    </>
  );
};

export default Header;
