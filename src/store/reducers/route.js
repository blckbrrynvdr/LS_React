import { SET_ROUTE } from "../actions/route";

const initialState = {
    addresses: [],
};

export default function routes(state = initialState, action) {
    switch (action.type) {
        case SET_ROUTE: {
          const routes = action.payload;
    
          return {
            routes: routes,
          }
        }
        default:
          return state;
      }
}