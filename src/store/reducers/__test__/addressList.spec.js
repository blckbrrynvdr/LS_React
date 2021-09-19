import addresses, { initialState } from "../addressList";
import { setAddressList } from "../../actions/adressList";

describe("address list", () => {
  describe("#SET_ADDRESS_LIST", () => {
    it('returns addresses list', () => {
      expect(addresses(initialState, setAddressList(["Пулково (LED)",]))).toEqual({
        ...initialState, addresses: [ 'Пулково (LED)' ]
      });
    });
  });
});
