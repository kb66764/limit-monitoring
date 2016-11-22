import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import TradeListElement from "./TradeListElement";
import Utils from "../../common/utils"

// Trade list component
export class TradeList extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // default ui local state
    this.state = {

    };

    // bind <this> to the event method
    this.changePage = this.changePage.bind(this);
  }

  // render
  render() {
    // pagination
    const {trades, trader, page} = this.props;
    let filtered_trades = trades;
    let traderMessage = "";
    let messageClassName = "";
    if (trader != null && trader.id > 0) {
      filtered_trades = trades.filter(t => t.traderid == trader.id);
      const traded_amount = Utils.getTradedAmount(trades, trader.id);
      let balance = trader.limit - traded_amount;
      traderMessage = "Total traded amount is [" + traded_amount + "]. "
      if (balance < 0) {
        messageClassName = "highlight";
        traderMessage += " You have exceeded your daily limit by [" + (balance *-1) + "]."
      }
      else {
        traderMessage += "Available amount is [" + balance + "].";
      }
    }

    const per_page = 10;
    const pages = Math.ceil(filtered_trades.length / per_page);
    const start_offset = (page - 1) * per_page;
    let start_count = 0;


    // show the list of trades
    return (
      <div>
        <h4 className={messageClassName}>{traderMessage}</h4>
        <Table bordered hover responsive striped>
          <thead>
          <tr>
            <th>Trade ID</th>
            <th>Trade Type</th>
            <th>Amount</th>
            <th>Counterparty</th>
            <th>Trader Name</th>
            <th>Trader Limit</th>
            <th>Edit</th>
          </tr>
          </thead>
          <tbody>
          {filtered_trades.map((trade, index) => {
            if (index >= start_offset && start_count < per_page) {
              start_count++;
              return (
                <TradeListElement key={index} trade={trade} />
              );
            }
          })}
          </tbody>
        </Table>

        <Pagination className="trades-pagination pull-right" bsSize="medium" maxButtons={10} first last next
          prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>
      </div>
    );
  }

  // change the trade lists' current page
  changePage(page) {
    this.props.dispatch(push('/trades?page=' + page));
  }
}

// export the connected class
function mapStateToProps(state, own_props) {
  //const trader = state.traders.find(x => Number(x.id) === Number(own_props.params.id)) || {};
  //const trades = (trader != null && trader.id > 0)? state.trades.filter(t => t.traderid == trader.id) : state.strades;
  return {
    trades: state.trades,

    // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
    // react-router-redux wants you to get the url data by passing the props through a million components instead of
    // reading it directly from the state, which is basically why you store the url data in the state (to have access to it)
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}
export default connect(mapStateToProps)(TradeList);
