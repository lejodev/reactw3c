import Plane from "./components/Plane";
import SampleComponent from "./components/stateLifecycle/SampleComponent";
import Conditionals from "./components/conditionals/Conditionals";
import Lists from "./components/lists/Lists";
import Form from "./components/forms/Form";
import NoPage from "./components/noPage/NoPage";
import Memo from "./components/memo/Memo";
import ReactStyling from "./components/styles/ReactStyling";
import Hooks from "./components/hooks/Hooks";
import Context from "./components/context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SampleComponent />}>
            <Route
              path="plane"
              element={<Plane brand="Boeing" reference="747-800" />}
            />
            <Route path="conditionals" element={<Conditionals />} />
            <Route path="memo" element={<Memo />} />
            <Route path="styles" element={<ReactStyling />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="context" element={<Context />} />
          </Route>
          <Route path="/formslists">
            <Route path="lists" element={<Lists />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
