import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ROUTE, setRoute } from '../actions/route';
import { getRoutesFromServer } from '../../api';

export function* getRoutesListSaga() {
    const data = yield call(getRoutesFromServer);
    
    if (data.routes) {
        yield put(setRoute(data.routes));
    }
}

export function* routesSaga() {
    yield takeEvery(GET_ROUTE, getRoutesListSaga);
}