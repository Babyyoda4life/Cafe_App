import React from "react";

const Card = (props) => {
  return (
    <div className=" w-[full] flex justify-center text-center sm:text-justify   m-auto bg-slate-300 rounded-lg mt-4 shadow-lg ">
      {props.children}
    </div>
  );
};

export default Card;
