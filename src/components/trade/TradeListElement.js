import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

// Trade List Element component
export class TradeListElement extends React.Component {
  // render
  render() {
    const {trade, traders} = this.props;
    let trader = traders.find(tr => tr.id === trade.traderid);
    return (
      <tr>
        <td>#{trade.id}</td>
        <td>{trade.type}</td>
        <td>{trade.amount}</td>
        <td>{trade.counterparty}</td>
        <td>
          <Link to={'trades/' + trader.id}>
            {trader.tradername}
          </Link>
        </td>
        <td>{trader.limit}</td>
        <td>
          <Link to={'trade-edit/' + trade.id}>
            <Button bsSize="xsmall">
              Edit <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
      </tr>
    );
  }
}

// prop checks
TradeListElement.propTypes = {
  trade: PropTypes.object.isRequired,
}


// export the connected class
function mapStateToProps(state) {
  return {
    traders: state.traders,
  }
}

export default connect(mapStateToProps)(TradeListElement);
