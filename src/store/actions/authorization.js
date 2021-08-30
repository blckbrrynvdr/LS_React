export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENCICATE = 'AUTHENCICATE';

export const logIn = () => ({
  type: LOG_IN
})
export const logOut = () => ({
  type: LOG_OUT
})
export const authenticate = (email, password) => ({
  type: AUTHENCICATE,
  payload: {
    email,
    password
  }
})
