import React from "react";
import Card from "../UI/Card";
import CoffeeItem from "./CoffeeItem/CoffeeItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableCoffee = () => {
  const coffeelist = DUMMY_MEALS.map((coffee) => (
    <CoffeeItem
      key={coffee.id}
      name={coffee.name}
      description={coffee.description}
      price={coffee.price}
    />
  ));

  return (
    <section className="max-w-[60rem] w-[90%] m-auto ">
      <Card>
        <ul className=" list-none ">{coffeelist}</ul>
        <ul className=" list-none ">{coffeelist}</ul>
      </Card>
    </section>
  );
};

export default AvailableCoffee;
