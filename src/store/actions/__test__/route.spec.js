import {
  GET_ROUTES,
  SET_ROUTES,
  getRoutes,
  setRoutes
} from "../route";

describe("card", () => {
  it("get routes works correctly", () => {
    const { from, to } = { from: "from", to: "to" };
    expect(getRoutes(from, to)).toEqual({
        type: GET_ROUTES,
        payload: { from, to }
    })
  });
  it("set routes works correctly", () => {
    const routes = ["1","2","3"];
    expect(setRoutes(routes)).toEqual({
        type: SET_ROUTES,
        payload: routes
    })
  });
});
