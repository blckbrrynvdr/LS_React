import {
  SET_CARD,
  PUSH_CARD_DATA,
  GET_CARD_DATA,
  setCard,
  pushCardData,
  getCardData
} from "../card";

describe("card", () => {
  it("set card works correctly", () => {
    const data = {
      cardNumber: "1",
      expiryDate: "1",
      cardName: "1",
      cvc: "1",
      valid: true
    }
    const { cardNumber, expiryDate, cardName, cvc, valid } = data;

    expect(setCard(cardNumber, expiryDate, cardName, cvc, valid)).toEqual({
        type: SET_CARD,
        payload: data,
    });
  });

  it("push card data works correctly", () => {
    const data = {
      cardNumber: "1",
      expiryDate: "1",
      cardName: "1",
      cvc: "1",
      token: "1",
    }
    const { cardNumber, expiryDate, cardName, cvc, token } = data;

    expect(pushCardData(cardNumber, expiryDate, cardName, cvc, token)).toEqual({
        type: PUSH_CARD_DATA,
        payload: data,
    });
  });

  it("get card data works correctly", () => {
      const token = "token";
      expect(getCardData(token)).toEqual({
        type: GET_CARD_DATA,
        payload: { token },
      });
  });
});
