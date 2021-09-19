import { recordSaga } from "./recordSaga";
import { getAddressesListSaga } from "../addressListSaga";
import { getAddressList } from "../../actions/adressList";
import { getAddressesFromServer } from "../../../api";

jest.mock("../../../api", () => ({
    getAddressesFromServer: jest.fn(() => {})
}));

describe("address list saga", () => {
  it("success", async () => {
    getAddressesFromServer.mockImplementation(async () => ({addresses: ['1','2']}));
    
    const dispatched = await recordSaga(getAddressesListSaga, getAddressList());
    
    expect(dispatched).toEqual([{
      type: "SET_ADDRESS_LIST",
      payload: ['1','2'],
    }]);
  });
  it("failure", async () => {
    getAddressesFromServer.mockImplementation(async () => ({address: ['1','2']}));
    
    const dispatched = await recordSaga(getAddressesListSaga, getAddressList());
    
    expect(dispatched).toEqual([]);
  });
});