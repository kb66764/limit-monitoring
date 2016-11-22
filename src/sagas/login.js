import { call, put } from "redux-saga/effects";
import ApiLogin from "../api/login";

// add/edit a user
export function* userLogin(action) {
  // call the api to add/edit the user
  yield call(ApiLogin.userLogin);
  //return action.callbackError("Some error");   // show an error when the API fails

  console.log("role " +action.role);
  // update the state by adding the role
  yield put({
    type: 'USER_LOGIN',
    role: action.role,
    traderid: action.traderid,
  });

  // success
  action.callbackSuccess();
}
