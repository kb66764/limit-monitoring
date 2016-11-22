import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { tradersFetchList, tradersAddEdit} from "./traders";
import { desksFetchList, desksAddEdit} from "./desks";
import { tradesFetchList, tradesAddEdit} from "./trades";
import { userLogin} from "./login";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'TRADERS_FETCH_LIST', tradersFetchList),
    fork(takeLatest, 'TRADERS_ADD_EDIT', tradersAddEdit),

    fork(takeLatest, 'DESKS_FETCH_LIST', desksFetchList),
    fork(takeLatest, 'DESKS_ADD_EDIT', desksAddEdit),

    fork(takeLatest, 'TRADES_FETCH_LIST', tradesFetchList),
    fork(takeLatest, 'TRADES_ADD_EDIT', tradesAddEdit),

    fork(takeLatest, 'USERS_LOGIN', userLogin),
  ];
}
