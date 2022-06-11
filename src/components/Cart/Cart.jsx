import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className=" list-none m-1 p-1 max-h-[20rem] overflow-scroll text-lg">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-lg mx-1 my-0">
        <span className="font-bold text-xl m-1 border-t-2">Total Amount</span>
        <span className="font-bold text-xl m-1 border-t-2">{totalAmount}</span>
      </div>
      <div className=" text-right">
        <button
          onClick={props.onClose}
          className="rounded-xl bg-slate-300 m-1 w-[5rem] p-1 hover:bg-red-500"
        >
          Close
        </button>
        {hasItems && (
          <button className="rounded-xl bg-slate-300 m-1 w-[5rem] p-1 hover:bg-green-500">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
