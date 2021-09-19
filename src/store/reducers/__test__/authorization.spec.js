import authReducer, { initialState } from "../authorization";
import {logIn, logOut} from "../../actions/authorization";

describe("auth", () => {
  describe("#LOG_IN", () => {
    it("returns isLoggedIn true", () => {
      expect(authReducer(initialState, logIn('token'))).toEqual({
        ...initialState, token: 'token', isLoggedIn: true
      });
    });
  });

  describe("#LOG_OUT", () => {
    it("returns isLoggedIn false", () => {
      expect(authReducer(initialState, logOut())).toEqual({
        ...initialState, isLoggedIn: false
      }); 
    });
  });
});