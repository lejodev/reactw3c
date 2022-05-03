import React from "react";

const Conditionals = () => {
  const cars = ["Masserati", "Ford", "Ferrari"];

  return (
    <>
      <h1>CONDITIONALS</h1>
      <h1>&&</h1>
      {cars.length > 0 && <div>Cars length is: {cars.length}</div>}
      
    </>
  );
};

export default Conditionals;
