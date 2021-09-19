import {
  LOG_IN,
  LOG_OUT,
  AUTHENCICATE,
  REGISTRATION,
  LOG_IN_ERROR,
  logIn,
  logOut,
  authenticate,
  registration,
  logInError
} from "../authorization";

describe("authorization", () => {
    it("log in works correctly", () => {
        const token = "token";
        expect(logIn(token)).toEqual({
            type: LOG_IN,
            payload: { token }
        });
    });
    it("log out works correctly", () => {
        expect(logOut()).toEqual({
            type: LOG_OUT,
        });
    });
    it("authenticate works correctly", () => {
        const { email, password } = { email: "email", password: "password" };
        expect(authenticate(email, password)).toEqual({
            type: AUTHENCICATE,
            payload:{ email, password }
        });
    });
    it("registration works correctly", () => {
        const data = { email: "1", password: "1", name: "1", surname: "1" };
        const { email, password, name, surname } = data;
        expect(registration(email, password, name, surname)).toEqual({
            type: REGISTRATION,
            payload: data
        });
    });
    it("log in error works correctly", () => {
        const error = "error";
        expect(logInError(error)).toEqual({
            type: LOG_IN_ERROR,
            payload: error
        });
    });
});