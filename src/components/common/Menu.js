import React from "react";
import { connect } from "react-redux";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Menu component
export class Menu extends React.Component {

  // render
  render() {
    const {login} = this.props;
    if (login.role === "riskManager") {
      return (
        <Nav bsStyle="pills">
          <IndexLinkContainer to="/traders">
            <NavItem>
              Traders
            </NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/desks">
            <NavItem>
              Desks
            </NavItem>
          </LinkContainer>
        </Nav>)
    }
    else if (login.role === "trader") {
      return (
        <Nav bsStyle="pills">
          <IndexLinkContainer to="/trades">
            <NavItem>
              Trades
            </NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/trade-edit">
            <NavItem>
              Book a Trade <Glyphicon glyph="plus-sign"/>
            </NavItem>
          </LinkContainer>
        </Nav>
      )
    }
    else
      return <div>{login.role}</div>;
    ;
  }
}


// export the connected class
function mapStateToProps(state) {
  return {
    login: state.login,
  };
}
export default connect(mapStateToProps)(Menu);
