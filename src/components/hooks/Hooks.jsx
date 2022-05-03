import React, { useEffect, useState, memo } from "react";

const Hooks = () => {
  const [name, setName] = useState("Albert");
  useEffect(() => {
    console.log("Got rendered");
  }, [name]);

  // useEffect(() => {
  //   alert(
  //     "Initial render.This will only render one time. Despite to any re-render"
  //   );
  // }, []); // Empty Array guarantees the side effect will only occur once. On the initial render only

  const [car, setCar] = useState({
    brand: "ford",
    reference: "Mustang",
    year: 1964,
    color: "red",
  });

  function changeColor() {
    setCar((prevState) => {
      return { ...prevState, color: "blue" };
    });
  }

  return (
    <>
      <div>
        I have a fabulous {car.year} {car.brand} {car.reference} in a nasty{" "}
        {car.color} color
        <button onClick={changeColor}>Change car color</button>
        <br />
        {name}
        <button onClick={() => setName("Nikola")}>Change name</button>
      </div>
    </>
  );
};

export default memo(Hooks);
