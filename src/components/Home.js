import React from "react";
import { ProgressBar } from "react-bootstrap";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";

// Home component
export default class Home extends React.Component {

  // render
  render() {
    const {children} = this.props;

    // render
    return (
      <div className="page-home">
        <div>
          <Menu/>
        </div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}
