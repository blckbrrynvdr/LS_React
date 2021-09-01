import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { authMiddleware } from './middleware/authorization';
import { card } from './middleware/card';

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, card));
