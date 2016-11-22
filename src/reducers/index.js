import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import traders from "./traders";
import desks from "./desks";
import trades from "./trades";
import login from "./login";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  traders: traders,
  desks: desks,
  trades: trades,
  login: login,
});
