import React from "react";
import { connect } from "react-redux";
import DeskList from "./desk/DeskList";

// Home page component
export class Desks extends React.Component {
  // render
  render() {
    const {desks} = this.props;
    if (desks.length) {
      return (
        <div className="page-home">
          <h4>Desks List with Limits</h4>
          <DeskList/>
        </div>
      );
    }
    else {
      return null;
    }
  }
}


// export the connected class
function mapStateToProps(state) {
  return {
    desks: state.desks,
  };
}
export default connect(mapStateToProps)(Desks);

