import { recordSaga } from "../recordSaga";
import { authenticateSaga } from "../authSaga";
import { authenticate } from "../../actions/authorization";


jest.mock("../../../api", () => ({
  serverLogin: jest.fn(() => ({success: true}))
}));
 
describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
      it("authenticates through api", async () => {
        const dispatched = await recordSaga(
          authenticateSaga,
          authenticate("testlogin", "testpassword")
        ); 
  
        expect(dispatched).toEqual([
          {
            type: "LOG_IN",
          },
        ]);
      });
    });
  });
  
