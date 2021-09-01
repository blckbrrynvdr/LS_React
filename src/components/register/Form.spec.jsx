import React from "react";
import { render } from "@testing-library/react";
import { Form } from "./Form";
import { BrowserRouter } from 'react-router-dom';

describe("Auth form", () => {
    it("renders correctly", () => {
        const { getByLabelText, getByTestId } = render(<BrowserRouter><Form /></BrowserRouter>);
        expect(getByLabelText('Email*')).toHaveAttribute('name', 'email');
        expect(getByLabelText('Придумайте пароль*')).toHaveAttribute('name', 'password');
        expect(getByTestId('submitButton')).toBeInTheDocument();
    });
});