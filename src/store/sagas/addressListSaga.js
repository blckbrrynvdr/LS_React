import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ADDRESS_LIST, setAddressList } from '../actions/adressList';
import { getAddressesFromServer } from '../../api';

export function* getAddressesListSaga() {
    const data = yield call(getAddressesFromServer);
    
    if (data.addresses) {
        yield put(setAddressList(data.addresses));
    }
}

export function* addressesSaga() {
    yield takeEvery(GET_ADDRESS_LIST, getAddressesListSaga);
}