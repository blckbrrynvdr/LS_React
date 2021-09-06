export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENCICATE = 'AUTHENCICATE';
export const REGISTRATION = 'REGISTRATION';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';

export const logIn = (token) => ({
  type: LOG_IN,
  payload: { token },
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const authenticate = (email, password) => ({
  type: AUTHENCICATE,
  payload: { email, password },
});

export const registration = (email, password, name, surname) => ({
  type: REGISTRATION,
  payload: { email, password, name, surname },
});

export const logInError = (error) => ({
  type: LOG_IN_ERROR,
  payload: error,
});

