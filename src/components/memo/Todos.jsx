import React, { memo } from "react";

const Todos = ({ todos }) => {
  console.log("Child render");
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div key={todo}>{todo}</div>
        ))}
      </ul>
    </>
  );
};

// Export todos omponent with memo
export default memo(Todos);
