import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

const FormCoffeeItem = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 20
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form
      onSubmit={submitHandler}
      className=" w-full h-12 rounded-2xl font-bold  text-black bg-stone-200 flex justify-center  mt-4 ml-4 "
    >
      <Input
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "20",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="m-2 p-1 border-solid bg-green-500 rounded-lg hover:bg-lime-300 ">
        Add+
      </button>
      {!amountIsValid && <p>Please enter a valid amount of items (1-20)</p>}
    </form>
  );
};

export default FormCoffeeItem;
