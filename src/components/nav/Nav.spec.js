import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Nav";

describe("Nav", () => {
    it("renders correctly", () => {
        const buttons = [
            {
              id: 1,
              name: "Карта",
              link: "map",
              clickHandler: () => {},
            },
            {
              id: 2,
              name: "Профиль",
              link: "profile",
              clickHandler: () => {},
            },
            {
              id: 3,
              name: "Выйти",
              clickHandler: () => {},
            },
          ];
        const { container } = render(<Nav buttons={ buttons }/>);
 
        expect(container.innerHTML).toMatch("nav"); 
        
    });
});