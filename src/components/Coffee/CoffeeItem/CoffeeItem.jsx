import React, { useContext } from "react";
import CartContext from "../../../store/CartContext";
import FormCoffeeItem from "./FormCoffeeItem";

const CoffeeItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="flex justify-between m-2 p-2 border-b-2">
      <div>
        <h3 className="mb-1">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-lg ">{price}</div>
      </div>
      <div>
        <FormCoffeeItem onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default CoffeeItem;
