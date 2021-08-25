import React from "react";
import { render } from "@testing-library/react";
import Form from "./Form";

describe("Auth form", () => {
    it("renders correctly", () => {
        const { getByLabelText, getByTestId } = render(<Form />);
        expect(getByLabelText('Email:')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Password:')).toHaveAttribute('name', 'password');
        expect(getByTestId('submitButton')).toBeInTheDocument();
    });
});