import { call, put } from "redux-saga/effects";
import ApiDesks from "../api/desks";

// fetch the desk's list
export function* desksFetchList(action) {
  // call the api to get the desks list
  const desks = yield call(ApiDesks.getList);

  // save the desks in state
  yield put({
    type: 'DESKS_LIST_SAVE',
    desks: desks,
  });
}

// add/edit a desk
export function* desksAddEdit(action) {
  // call the api to add/edit the desk
  yield call(ApiDesks.addEdit);
  //return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the desk
  yield put({
    type: action.desk.id ? 'DESKS_EDIT_SAVE' : 'DESKS_ADD_SAVE',
    desk: action.desk,
  });

  // success
  action.callbackSuccess();
}
