import React from "react";

const Lists = () => {
  const myCars = [
    "Mazda 3 3rd gen",
    "Toyota Land Cruiser Prado",
    "Porsche 718 Cayman GT4",
    "..."
  ];

  return (
    <>
      <h1>WHO LIVES IN MY GARAGE?</h1>
      {myCars.map((car) => (
        <div>{car}</div>
      ))}
    </>
  );
};

export default Lists;
