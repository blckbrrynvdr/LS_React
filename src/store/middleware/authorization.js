import { logIn, AUTHENCICATE, REGISTRATION, logInError } from '../actions/authorization';
import { serverLogin, serverRegistration } from '../../api';

export const authMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case AUTHENCICATE: {
      const { email, password } = action.payload;
      const data = await serverLogin(email, password);
      
      if (data.success) {
        store.dispatch(logIn(data.token));
      }

      if(data.error) {
        store.dispatch(logInError(data.error));
      }

      break;
    }
    case REGISTRATION: {
      const { email, password, name, surname } = action.payload;
      const data = await serverRegistration(email, password, name, surname);

      if (data) {
        store.dispatch(logIn(data.token));
      }

      break;
    }
    
    default: {
        next(action);

        break;
    }
  }
};


