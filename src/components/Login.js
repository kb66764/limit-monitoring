import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Button } from "react-bootstrap";
import { FormGroup, FormControl, HelpBlock, Row, Col } from "react-bootstrap";


// Login page component
export class Login extends React.Component {

  constructor(props) {
    super(props);

    // default ui local state
    this.state = {
      role: "",
      traderDropdownCssClass: "hidden",
      redirect: "",
      traderid: 0,
    };

    // bind <this> to the event method

    this.login = this.login.bind(this);

    this.selectRole = this.selectRole.bind(this);
    this.selectTrader = this.selectTrader.bind(this);
  }

  // render
  render() {
    const {traders} = this.props;
    var options = traders.map(function (trader) {
      return (
        <option key={trader.id} value={trader.id}>
          {trader.tradername}
        </option>
      )
    });
    return (
      <div className="page-home">
        <p className="lead">Please select your role below</p>
        <FormControl componentClass="select" value={this.state.role}
                     onChange={this.selectRole}>
          <option value="">Select Role</option>
          <option value="trader">Trader</option>
          <option value="riskManager">Risk Manager</option>
        </FormControl> <br />
        <FormControl componentClass="select" onChange={this.selectTrader} className={this.state.traderDropdownCssClass}
                     value={this.state.traderid}>
          <option value="0">Select Trader</option>
          {options}
        </FormControl> <br />
        <Button bsStyle="primary" onClick={this.login}>Login</Button>
      </div>
    );
  }

  selectRole(event) {
    let role = event.target.value;
    let traderDropdownCssClass = "hidden";
    if (role === "trader") {
      traderDropdownCssClass = "show";
    }

    console.log(role);

    this.setState({
      role: role,
      traderDropdownCssClass: traderDropdownCssClass,
      redirect: '/traders',
      traderid: "",
    });
  }

  selectTrader(event) {
    let traderid = event.target.value;

    this.setState({
      role: this.state.role,
      traderDropdownCssClass: this.state.traderDropdownCssClass,
      redirect: '/trades',
      traderid: Number(traderid),
    });
  }

  /**
   * User Login
   *
   * @param event
   */
  login(event) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'USERS_LOGIN',
        role: this.state.role,
        traderid: this.state.traderid,
        callbackSuccess: () => {
          dispatch(push(this.state.redirect));
          resolve();
        }
      });
    });
  }
}


// export the connected class
function mapStateToProps(state) {
  return {
    login: state.login,
    traders: state.traders,
  };
}
export default connect(mapStateToProps)(Login);
