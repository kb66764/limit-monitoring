import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";
import Utils from "../../common/utils"

// Desk List Element component
export class DeskListElement extends React.Component {

  getDeskTradedAmount(deskid, traders, trades) {
    return traders.filter(trader => trader.deskid === deskid).reduce(
      (sum, trader) =>
      {return sum + Utils.getTradedAmount(trades, trader.id)}, 0);
  }

  // render
  render() {
    const {traders, trades, desk} = this.props;
    return (
      <tr>
        <td>#{desk.id}</td>
        <td>{desk.deskname}</td>
        <td>{this.getDeskTradedAmount(desk.id, traders, trades)}</td>
        <td>{desk.limit}</td>
        <td>
          <Link to={'desk-edit/' + desk.id}>
            <Button bsSize="xsmall">
              Edit <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
      </tr>
    );
  }
}


// export the connected class
function mapStateToProps(state) {
  return {
    traders: state.traders,
    trades: state.trades,
  }
}

export default connect(mapStateToProps)(DeskListElement);

// prop checks
DeskListElement.propTypes = {
  desk: PropTypes.object.isRequired,
}
