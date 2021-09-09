import { all, fork } from "@redux-saga/core/effects";
import { authSaga } from './authSaga';
import { cardSaga } from './cardSaga';
import { addressesSaga } from './addressListSaga';

export default function* rootSaga() {
  yield all([
    fork(addressesSaga),
    fork(authSaga),
    fork(cardSaga),
    // fork(routeSaga),
  ]);
}
