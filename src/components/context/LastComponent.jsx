import React, { useContext } from "react";
import { userContext } from "./Context";
import "./context.css";

const LastComponent = () => {
  // const mierd = useContext()
  return (
    <userContext.Consumer>
      {(some) => <div>LastComponent{some}</div>}
    </userContext.Consumer>
  );
};

export default LastComponent;
