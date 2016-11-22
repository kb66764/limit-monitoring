import { call, put } from "redux-saga/effects";
import ApiTrades from "../api/trades";

// fetch the trade's list
export function* tradesFetchList(action) {
  // call the api to get the trades list
  const trades = yield call(ApiTrades.getList);

  // save the trades in state
  yield put({
    type: 'TRADES_LIST_SAVE',
    trades: trades,
  });
}

// add/edit a trade
export function* tradesAddEdit(action) {
  // call the api to add/edit the trade
  yield call(ApiTrades.addEdit);
  //return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the trade
  yield put({
    type: action.trade.id ? 'TRADES_EDIT_SAVE' : 'TRADES_ADD_SAVE',
    trade: action.trade,
  });

  // success
  action.callbackSuccess();
}
