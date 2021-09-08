import { all, fork } from "@redux-saga/core/effects";
import { authSaga } from './authSaga';
import { cardSaga } from './cardSaga';

export default function* rootSaga() {
  yield all([
    // fork(addressListSaga),
    fork(authSaga),
    fork(cardSaga),
    // fork(routeSaga),
  ]);
}
