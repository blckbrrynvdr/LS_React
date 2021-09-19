import routes from "../route";
import { setRoutes } from "../../actions/route";

describe("route", () => {
  describe("#SET_ROUTES", () => {
    it("return routes", () => {
      expect(routes({}, setRoutes(['Shire', 'Mount Doom']))).toEqual({
        routes: ['Shire', 'Mount Doom']
      });
    });
  });
});
