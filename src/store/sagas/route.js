import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ROUTES, setRoutes } from '../actions/route';
import { getRoutesFromServer } from '../../api';

export function* getRoutesListSaga(action) {
    const { from, to } = action.payload;
    const data = yield call(getRoutesFromServer, from, to);
    
    if (data) {
        yield put(setRoutes(data));
    }
}

export function* routesSaga() {
    yield takeEvery(GET_ROUTES, getRoutesListSaga);
}