import auth from './authorization'
import {logIn, logOut} from '../actions/authorization'

describe("auth", () => {
  describe("#LOG_IN", () => {
    it('returns isLoggedIn true', () => {
      expect(auth({}, logIn())).toEqual({isLoggedIn: true})
    })
  }) 

  describe("#LOG_OUT", () => {
    it('returns isLoggedIn false', () => {
      expect(auth({}, logOut())).toEqual({isLoggedIn: false})
    })
  })
})