import React, { useContext } from "react";
import { GiShoppingCart } from "react-icons/gi";
import CartContext from "../../store/CartContext";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      onClick={props.onClick}
      className=" flex border-none cursor-pointer bg-slate-300 px-2 py-2 justify-around items-center font-bold rounded-2xl hover:bg-gray-200 hover:animate-bounce "
    >
      <span className="m-1">Your Cart</span>
      <span>
        <GiShoppingCart size={20} />
      </span>
      <span className="py-1 px-1 ml-2 font-bold">{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
