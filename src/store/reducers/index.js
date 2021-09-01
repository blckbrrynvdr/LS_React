import { combineReducers } from 'redux';
import auth from './authorization';
import card from './card';

export default combineReducers({auth: auth, card: card});

