import { logIn, AUTHENCICATE } from '../actions/authorization';
import { serverLogin } from '../../api';

export const authMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case AUTHENCICATE: {
      const { email, password } = action.payload;
      const data = await serverLogin(email, password);

      if (data) {
        store.dispatch(logIn(data.token));
      }

      break;
    }
    
    default: {
        next(action);
    }
  }

}


