import React from "react";
import { render } from "@testing-library/react";
import CommonInput from "./Common";

describe("Common Input", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<CommonInput id="test" type="text" name="name" />);

        expect(getByTestId('root')).toBeInTheDocument();
        expect(getByTestId('label')).toBeInTheDocument();
        expect(getByTestId('input')).toBeInTheDocument();
        
        /* тут я хотел проверить, что переданные props правильно отрендерились, 
         * но видимо что-то не так делаю */
        // expect(getByTestId('input')).toHaveAttribute('name', 'name');
        // expect(getByTestId('input')).toHaveAttribute('type', 'text');
    });
});