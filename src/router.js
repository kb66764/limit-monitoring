import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Login from "./components/Login";
import TraderEdit from "./components/trader/TraderEdit";
import TradeEdit from "./components/trade/TradeEdit";
import DeskEdit from "./components/desk/DeskEdit";
import Traders from "./components/Traders";
import Desks from "./components/Desks";
import Trades from "./components/Trades";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="traders" component={Traders}/>
      <Route path="desks" component={Desks}/>
      <Route path="trades(/:id)" component={Trades}/>
      <Route path="trade-edit(/:id)" component={TradeEdit}/>
      <Route path="desk-edit(/:id)" component={DeskEdit}/>
      <Route path="trader-edit(/:id)" component={TraderEdit}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
