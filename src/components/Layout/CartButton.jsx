import React from "react";
import { GiShoppingCart } from "react-icons/gi";

const CartButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className=" flex border-none cursor-pointer bg-slate-300 px-2 py-2 justify-around items-center font-bold rounded-2xl hover:bg-gray-200 hover:animate-bounce "
    >
      <span className="m-1">Your Cart</span>
      <span>
        <GiShoppingCart size={20} />
      </span>
      <span className="py-1 px-1 ml-2 font-bold">3</span>
    </button>
  );
};

export default CartButton;
