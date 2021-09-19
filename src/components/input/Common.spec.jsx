import React from "react";
import { render } from "@testing-library/react";
import CommonInput from "./Common";

describe("Common Input", () => {
    it("renders correctly", () => {
        const { getByTestId, getByLabelText } = render(<CommonInput labelText="Test" id="test" type="text" name="name" />);

        expect(getByTestId('root')).toBeInTheDocument();
        expect(getByTestId('label')).toBeInTheDocument();
        expect(getByTestId('input')).toBeInTheDocument();
        expect(getByLabelText('Test')).toHaveAttribute('name', 'name');
        expect(getByLabelText('Test')).toHaveAttribute('type', 'text');
    });
});