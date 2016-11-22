import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";
import Utils from "../../common/utils"

// Trader List Element component
export class TraderListElement extends React.Component {

  // render
  render() {
    const {trader, desks, trades} = this.props;
    let desk = desks.find(d => d.id === trader.deskid);
    let amount = Utils.getTradedAmount(trades, trader.id);
    let balance = trader.limit - amount;
    let className = (balance < 0) ? "highlight" : "regular";
    return (
      <tr className={className}>
        <td>#{trader.id}</td>
        <td>
          <Link to={'trades/' + trader.id}>
            {trader.tradername}
          </Link>
        </td>
        <td title={"DeskLimit " + desk.limit}>{desk.deskname}</td>
        <td>{amount}</td>
        <td>{trader.limit}</td>
        <td>{balance}</td>
        <td>
          <Link to={'trader-edit/' + trader.id}>
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
    desks: state.desks,
    trades: state.trades,
  }
}

export default connect(mapStateToProps)(TraderListElement);

// prop checks
TraderListElement.propTypes = {
  trader: PropTypes.object.isRequired,
}
