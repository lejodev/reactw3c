import React, { useState, createContext } from "react";
import LastComponent from "./LastComponent";
import "./context.css";

export const userContext = createContext();

const Context = () => {
  const [state, setState] = useState("Unset");
  return (
    <userContext.Provider value={"Alejandro"}>
      <div>
        <button
          onClick={() => {
            setState("SET");
          }}
        >
          TRIGGER
        </button>
        <div>
          <div>
            <div>
              <div>
                <LastComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </userContext.Provider>
  );
};

export default Context;
