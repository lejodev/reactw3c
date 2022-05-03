import React from "react";
import ReactDOM from "react-dom";

class Plane extends React.Component {
  constructor() {
    super();
    this.state = {
      airline: "Cathay Pacific",
    };
  }

  changeAirline = () => {
    this.setState({ airline: "Fly Emirates" });
  };

  render() {
    return (
      <>
        <h1>
          This is a {this.props.brand} {this.props.reference} from{" "}
          {this.state.airline}
        </h1>
        <button onClick={this.changeAirline}>Change airline</button>
      </>
    );
  }
}

export default Plane;
