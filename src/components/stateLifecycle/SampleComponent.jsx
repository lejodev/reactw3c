import React from "react";
import ReactDOM from "react-dom";
import { Outlet } from "react-router-dom";

class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
    };
  }

  changeChildView = () => {
    this.setState({ showChild: false });
  };

  render() {
    let child = this.state.showChild ? <ChildComponent /> : null;
    return (
      <>
        <h1>PARENT COMPONENT</h1>
        <button onClick={this.changeChildView}>CHANGE IT!</button>
        {child}
        <Outlet />
      </>
    );
  }
}

class ChildComponent extends React.Component {
  componentWillUnmount() {
    // setTimeout(() => {
      alert("Component unMounted properly");
    // }, 1000);
  }
  render() {
    return <>CHILD</>;
  }
}

// ReactDOM.render(<SampleComponent />, document.getElementById("root"));
export default SampleComponent;
