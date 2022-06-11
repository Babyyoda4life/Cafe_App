import React from "react";
import FormCoffeeItem from "./FormCoffeeItem";

const CoffeeItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between m-2 p-2 border-b-2">
      <div>
        <h3 className="mb-1">{props.name}</h3>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold text-lg ">{price}</div>
      </div>
      <div>
        <FormCoffeeItem />
      </div>
    </li>
  );
};

export default CoffeeItem;
