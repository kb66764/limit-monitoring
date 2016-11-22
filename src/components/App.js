import React from "react";
import { connect } from "react-redux";
import Menu from "./common/Menu";
import { ProgressBar } from "react-bootstrap";
import "../stylesheets/main.scss";
import { Link } from "react-router";

// App component
export class App extends React.Component {

  // pre-render logic
  componentWillMount() {
    // the first time we load the app, we need traders, desks and trades list
    this.props.dispatch({type: 'TRADERS_FETCH_LIST'});
    this.props.dispatch({type: 'DESKS_FETCH_LIST'});
    this.props.dispatch({type: 'TRADES_FETCH_LIST'});
  }

  // render
  render() {
    // show the loading state while we wait for the app to load
    const {traders, desks, children} = this.props;
    if (!traders.length && !desks.length) {
      return (
        <div>
          <ProgressBar active now={100}/>
        </div>
      );
    }

    // render
    return (
      <div className="container">
        <div className="page-header">
          <Link to='/'><h1>Limit Monioring</h1></Link>
        </div>
        <div>
          <Menu/>
        </div>
        <div>
          {children}
        </div>
        <div className="container footer">
            Simple traders app built with {' '}
            <a href="http://redux-minimal.js.org/" target="_blank">redux-minimal</a>
        </div>
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    traders: state.traders || [],
    desks: state.desks || [],
    trades: state.trades || [],
  };
}
export default connect(mapStateToProps)(App);
