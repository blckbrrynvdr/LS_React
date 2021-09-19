import { recordSaga } from "./recordSaga";
import { authenticateSaga } from "../authSaga";
import { authenticate } from "../../actions/authorization";
import { serverLogin } from "../../../api";


jest.mock("../../../api", () => ({
  serverLogin: jest.fn(() => ({success: true}))
}));
 
describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
      it("authenticates through api", async () => {
        serverLogin.mockImplementation(async () => ({success: true, token: 123}))
        const dispatched = await recordSaga(
          authenticateSaga,
          authenticate("testlogin", "testpassword")
        ); 
  
        expect(dispatched).toEqual([
          {
            type: "LOG_IN",
            payload: {
              token: 123
            }
          },
        ]);
      });
    });
  });
  
