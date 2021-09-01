import card from './card'
import {
  setCard
} from '../actions/card'

describe("card reducer", () => {
  describe("SET_CARD", () => {
    const data = {
      cardNumber: "test",
      expiryDate: "test",
      cardName: "test",
      cvc: "test",
    };
    it('returns card state', () => {
      expect(card({}, setCard("test","test","test", "test"))).toEqual(data)
    })
  })


})
