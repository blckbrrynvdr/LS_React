import { LOG_IN, LOG_OUT, LOG_IN_ERROR } from "../actions/authorization";
import { getLoginDataFromLocalStorage, setCardDataToLocalStorage, setLoginDataToLocalStorage } from '../../localstorage';

const localSorageData = getLoginDataFromLocalStorage();

export const initialState = {
  isLoggedIn: false,
  token: localSorageData.token,
  error: null,
}

export default function authReducer (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      
      setLoginDataToLocalStorage(true, action.payload.token);

      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token
      }
    }
    case LOG_OUT: {
      setLoginDataToLocalStorage(false, '');
      setCardDataToLocalStorage('','','','',false);

      return {
        ...state,
        isLoggedIn: false
      }
    }

    case LOG_IN_ERROR: {
      return {
        isLoggedIn: false,
        token: '',
        error: action.payload,
      };
    }

    default:
      return state
  }
}
