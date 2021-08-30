import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { authMiddleware } from './middleware/authorization';

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));
