import { LOG_IN, LOG_OUT } from "../actions/authorization";
import { getLoginDataFromLocalStorage, setLoginDataToLocalStorage } from '../../localstorage';

const localSorageData = getLoginDataFromLocalStorage();

const initialState = {
  isLoggedIn: false,
  token: localSorageData.token,
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      console.log('reducer auth log_in');
      setLoginDataToLocalStorage(true, action.payload.token);

      return {
        isLoggedIn: true,
        token: action.payload.token
      }
    }
    case LOG_OUT: {
      setLoginDataToLocalStorage(false, '');

      return {
        isLoggedIn: false
      }
    }

    default:
      return state
  }
}
