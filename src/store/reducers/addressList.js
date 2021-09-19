import { SET_ADDRESS_LIST } from "../actions/adressList";

export const initialState = {
  addresses: []
}

export default function addresses(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS_LIST: {
      const addresses = action.payload;

      return {
        addresses: addresses,
      }
    }
    default:
      return state;
  }
}
