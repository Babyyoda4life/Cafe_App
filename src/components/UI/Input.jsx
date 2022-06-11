import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center justify-center w-[50px] m-2 ">
      <input
        ref={ref}
        className="p-1 rounded-lg border-solid m-1  "
        {...props.input}
      />
    </div>
  );
});

export default Input;
