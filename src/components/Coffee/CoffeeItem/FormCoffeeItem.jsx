import React from "react";
import Input from "../../UI/Input";

const FormCoffeeItem = (props) => {
  return (
    <form className=" w-full h-12 rounded-2xl font-bold  text-black bg-stone-200 flex justify-center  mt-4  ">
      <Input
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="m-2 p-1 border-solid bg-green-500 rounded-lg hover:bg-lime-300 ">
        Add+
      </button>
    </form>
  );
};

export default FormCoffeeItem;
