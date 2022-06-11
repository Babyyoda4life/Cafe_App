import React from "react";

const Card = (props) => {
  return (
    <div className="max-w-[1240px] w-[full] grid md:grid-cols-2  justify-center text-center m-auto bg-slate-300 rounded-lg mt-4 shadow-lg ">
      {props.children}
    </div>
  );
};

export default Card;
