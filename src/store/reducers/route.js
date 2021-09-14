import { SET_ROUTES } from "../actions/route";

const initialState = {
  routes: [],
};

export default function routes(state = initialState, action) {
    switch (action.type) {
        case SET_ROUTES: {
          const routes = action.payload;
    
          return {
            routes: routes,
          }
        }
        default:
          return state;
      }
}