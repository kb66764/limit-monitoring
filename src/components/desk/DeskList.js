import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import DeskListElement from "./DeskListElement";

// Desk list component
export class DeskList extends React.Component {
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
    const {desks, page} = this.props;
    const per_page = 10;
    const pages = Math.ceil(desks.length / per_page);
    const start_offset = (page - 1) * per_page;
    let start_count = 0;

    // show the list of desks
    return (
      <div>
        <Table bordered hover responsive striped>
          <thead>
          <tr>
            <th>ID</th>
            <th>Deskname</th>
            <th>Traded Amount</th>
            <th>Daily Limit</th>
            <th>Edit</th>
          </tr>
          </thead>
          <tbody>
          {desks.map((desk, index) => {
            if (index >= start_offset && start_count < per_page) {
              start_count++;
              return (
                <DeskListElement key={index} desk={desk} />
              );
            }
          })}
          </tbody>
        </Table>

        <Pagination className="desks-pagination pull-right" bsSize="medium" maxButtons={10} first last next
          prev boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>
      </div>
    );
  }

  // change the desk lists' current page
  changePage(page) {
    this.props.dispatch(push('/desks?page=' + page));
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    desks: state.desks,

    // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
    // react-router-redux wants you to get the url data by passing the props through a million components instead of
    // reading it directly from the state, which is basically why you store the url data in the state (to have access to it)
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}
export default connect(mapStateToProps)(DeskList);
