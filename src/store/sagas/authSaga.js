import { takeEvery, call, put } from 'redux-saga/effects';
import { serverLogin, serverRegistration } from '../../api';
import { AUTHENCICATE, logIn, logInError, REGISTRATION } from '../actions/authorization';

export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const data = yield call(serverLogin, email, password);
    if (data.success) {
        yield put(logIn(data.token));
    }
    if(!data.success && data.error) {
        yield put(logInError(data.error));
    }
}



export function* registrationSaga(action) {
    const { email, password, name, surname } = action.payload;
    const data =  yield call(serverRegistration, email, password, name, surname);

    if (data.success) {
        yield put(logIn(data.token));
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENCICATE, authenticateSaga);
    yield takeEvery(REGISTRATION, registrationSaga);
}