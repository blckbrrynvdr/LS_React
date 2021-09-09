import { takeEvery, call, put } from 'redux-saga/effects';
import { PUSH_CARD_DATA, GET_CARD_DATA, setCard } from '../actions/card';
import { pushCardDataToServer, getCardDataFromServer } from '../../api';

export function* pushCardSaga(action) {
    const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
    const { success } = yield call(
        pushCardDataToServer,
        cardNumber,
        expiryDate,
        cardName,
        cvc,
        token
    );
    
    if (success) {
        yield put(setCard(cardNumber, expiryDate, cardName, cvc, true));
    }
}

export function* getCardSaga(action) {
    const { token } = action.payload;
    const data = yield call(getCardDataFromServer, token);
    
    if (data.hasOwnProperty('id')) {
        yield put(setCard(data.cardNumber, data.expiryDate, data.cardName, data.cvc, true));
    }
}

export function* cardSaga() {
    yield takeEvery(PUSH_CARD_DATA, pushCardSaga);
    yield takeEvery(GET_CARD_DATA, getCardSaga);
}