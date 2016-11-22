import React from "react";
import { connect } from "react-redux";
import TraderList from "./trader/TraderList";

// Traders page component
export class Traders extends React.Component {
  // render
  render() {
    const {traders} = this.props;
    if (traders.length) {
      return (
        <div className="page-home">
          <h4>Traders List with Limits</h4>
          <TraderList/>
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
    traders: state.traders,
  };
}
export default connect(mapStateToProps)(Traders);

