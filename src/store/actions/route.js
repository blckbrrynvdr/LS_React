export const GET_ROUTE = 'GET_ROUTE';
export const SET_ROUTE = 'SET_ROUTE';

export const getRoute = (from, to) => ({
    type: GET_ROUTE,
    payload: { from, to }
});

export const setRoute = (routes) => ({
    type: SET_ROUTE,
    payload: routes,
});