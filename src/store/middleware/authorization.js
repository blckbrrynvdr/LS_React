import { logIn, AUTHENCICATE, REGISTRATION } from '../actions/authorization';
import { getCardDataFromServer, serverLogin, serverRegistration } from '../../api';
import { setCard } from '../actions/card';

export const authMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case AUTHENCICATE: {
      const { email, password } = action.payload;
      const data = await serverLogin(email, password);

      if (data) {
        store.dispatch(logIn(data.token));

        const cardData = await getCardDataFromServer(data.token);

        if (cardData.hasOwnProperty('id')) {
          store.dispatch(setCard(
            cardData.cardNumber,
            cardData.expiryDate,
            cardData.cardName,
            cardData.cvc
          ));
        }
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


