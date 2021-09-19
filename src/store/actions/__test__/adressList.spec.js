import {
  getAddressList,
  GET_ADDRESS_LIST,
  setAddressList,
  SET_ADDRESS_LIST
} from "../adressList";

describe("address list", () => {
    it("get address list works correctly", () => {
        expect(getAddressList()).toEqual({
            type: GET_ADDRESS_LIST,
        });
    });
    it("set address list works correctly", () => {
        const addressesList = ['from', 'to'];
        expect(setAddressList(addressesList)).toEqual({
            type: SET_ADDRESS_LIST,
            payload: addressesList,
        });
    });
});