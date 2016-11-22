import React from "react";
import { connect } from "react-redux";
import TradeList from "./trade/TradeList";

// Home page component
export class Trades extends React.Component {
  // render
  render() {
    const {trades, trader} = this.props;
    const message = trader != null && trader.id > 0? trader.tradername : 'all traders';
    if (trades.length) {
      return (
        <div className="page-home">
          <h4>Trades booked by {message}</h4>
          <TradeList trader={trader}/>
        </div>
      );
    }
    else {
      return null;
    }
  }
}


// export the connected class
function mapStateToProps(state, own_props) {
  let traderid = Number(own_props.params.id);

  //Get trader from current login trader
  if (state.login.traderid > 0)
    traderid = state.login.traderid;

  const trader = state.traders.find(x => Number(x.id) === traderid) || {};

  return {
    trades: state.trades || [],
    trader: trader,
  };
}
export default connect(mapStateToProps)(Trades);

