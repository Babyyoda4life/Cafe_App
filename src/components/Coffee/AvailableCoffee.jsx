import React from "react";
import Card from "../UI/Card";
import CoffeeItem from "./CoffeeItem/CoffeeItem";

const DUMMY_COFFEE = [
  {
    id: "m1",
    name: "Espresso",
    description: "Single or double shoot of our finest arabica coffee beans",
    price: 2.55,
  },
  {
    id: "m2",
    name: "Caffe Macchiato",
    description: "When your espresso needs a droop of milk",
    price: 2.7,
  },
  {
    id: "m3",
    name: "Caffe Latte",
    description: "Hot or Cold version we got you covered",
    price: 3.6,
  },
  {
    id: "m4",
    name: "Cappuccion",
    description: "Perfect combination of espresso and steamed milk",
    price: 3.4,
  },
  {
    id: "m5",
    name: "Hot Chocolate",
    description: "Best cocoa beans to your cup comes this delicious drink ",
    price: 3.2,
  },
];

const AvailableCoffee = () => {
  const coffeelist = DUMMY_COFFEE.map((coffee) => (
    <CoffeeItem
      key={coffee.id}
      id={coffee.id}
      name={coffee.name}
      description={coffee.description}
      price={coffee.price}
    />
  ));

  return (
    <section className="max-w-7xl w-[90%] m-auto  ">
      <Card>
        <ul className=" list-none  ">{coffeelist}</ul>
      </Card>
    </section>
  );
};

export default AvailableCoffee;
