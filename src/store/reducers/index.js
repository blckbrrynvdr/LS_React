import { combineReducers } from 'redux';
import auth from './authorization';
import card from './card';
import addresses from './addressList';
import routes from './route';

export default combineReducers({auth: auth, card: card, addresses: addresses, routes: routes});

