import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Nav";
import { BrowserRouter } from 'react-router-dom';

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
        const { container } = render(<BrowserRouter><Nav buttons={ buttons }/></BrowserRouter>);
 
        expect(container.innerHTML).toMatch("nav"); 
        
    });
});