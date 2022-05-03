import React, { useState } from "react";
import Todos from "./Todos";

const Memo = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3", "todo 4"]);

  function increment() {
    setCounter((counter) => counter + 1);
  }
  return (
    <div>
        <Todos todos={todos} />
      Count {counter}
      <button onClick={increment}>Set counter</button>
    </div>
  );
};

export default Memo;
