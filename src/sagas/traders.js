import { call, put } from "redux-saga/effects";
import ApiTraders from "../api/traders";

// fetch the trader's list
export function* tradersFetchList(action) {
  // call the api to get the traders list
  const traders = yield call(ApiTraders.getList);

  // save the traders in state
  yield put({
    type: 'TRADERS_LIST_SAVE',
    traders: traders,
  });
}

// add/edit a trader
export function* tradersAddEdit(action) {
  // call the api to add/edit the trader
  yield call(ApiTraders.addEdit);
  //return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the trader
  yield put({
    type: action.trader.id ? 'TRADERS_EDIT_SAVE' : 'TRADERS_ADD_SAVE',
    trader: action.trader,
  });

  // success
  action.callbackSuccess();
}
