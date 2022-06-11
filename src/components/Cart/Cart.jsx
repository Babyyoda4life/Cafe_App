import React from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className=" list-none m-1 p-1 max-h-[20rem] overflow-auto text-lg">
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}{" "}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="flex justify-between items-center font-bold text-lg mx-1 my-0">
        <span className="font-bold text-xl m-1 border-t-2">Total Amount</span>
        <span className="font-bold text-xl m-1 border-t-2">35.62</span>
      </div>
      <div className=" text-right">
        <button
          onClick={props.onClose}
          className="rounded-xl bg-slate-300 m-1 w-[5rem] p-1 hover:bg-red-500"
        >
          Close
        </button>
        <button className="rounded-xl bg-slate-300 m-1 w-[5rem] p-1 hover:bg-green-500">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
