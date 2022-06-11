const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-2 px-1 py-0 mx-1 my-0">
      <div>
        <h2>{props.name}</h2>
        <div className="w-[10rem] flex justify-between items-center">
          <span className="font-bold">{price}</span>
          <span className="font-bold border-solid p-1 rounded-md text-stone-300">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <button
          className="font-bold border-2 w-[3rem] text-center rounded-md bg-transparent cursor-pointer ml-4 m-1"
          onClick={props.onRemove}
        >
          −
        </button>
        <button
          className="font-bold border-2 w-[3rem] text-center rounded-md bg-transparent cursor-pointer ml-4 m-1"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
