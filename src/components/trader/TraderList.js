import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import TraderListElement from "./TraderListElement";

// Trader list component
export class TraderList extends React.Component {
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
    const {traders, desks, page} = this.props;
    const per_page = 10;
    const pages = Math.ceil(traders.length / per_page);
    const start_offset = (page - 1) * per_page;
    let start_count = 0;

    // show the list of traders
    if (desks.length > 0) {
      return (
        <div>
          <Table bordered hover responsive striped>
            <thead>
            <tr>
              <th>Trader ID</th>
              <th>Trader Name</th>
              <th>Desk</th>
              <th>Traded Value</th>
              <th>Daily Limit</th>
              <th>Available Balance</th>
              <th>Edit</th>
            </tr>
            </thead>
            <tbody>
            {traders.map((trader, index) => {
              if (index >= start_offset && start_count < per_page) {
                start_count++;
                return (
                  <TraderListElement key={index} trader={trader}/>
                );
              }
            })}
            </tbody>
          </Table>

          <Pagination className="traders-pagination pull-right" bsSize="medium" maxButtons={10} first last next
                      prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>
        </div>)
      }
      else return null;
  }

  // change the trader lists' current page
  changePage(page) {
    this.props.dispatch(push('/?page=' + page));
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    traders: state.traders,
    desks: state.desks,
    trades: state.trades,

    // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
    // react-router-redux wants you to get the url data by passing the props through a million components instead of
    // reading it directly from the state, which is basically why you store the url data in the state (to have access to it)
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}
export default connect(mapStateToProps)(TraderList);
