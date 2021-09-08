import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// import { authMiddleware } from './middleware/authorization';
// import { card } from './middleware/card';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);