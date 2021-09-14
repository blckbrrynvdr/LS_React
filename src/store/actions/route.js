export const GET_ROUTES = 'GET_ROUTES';
export const SET_ROUTES = 'SET_ROUTES';

export const getRoutes = (from, to) => ({
    type: GET_ROUTES,
    payload: { from, to }
});

export const setRoutes = (routes) => ({
    type: SET_ROUTES,
    payload: routes,
});