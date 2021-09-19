import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Profile } from "./Profile";

const mockDispatch = jest.fn();

describe("Profile", () => {
  describe("renders", () => {
    it("renders correctly", () => {
      const { getByLabelText, getByTestId } = render(<Profile useDispatchHook={() => mockDispatch}  />);
      expect(getByLabelText("Имя владельца")).toHaveAttribute("name", "cardName");
      expect(getByLabelText("Номер карты")).toHaveAttribute("name", "cardNumber");
      expect(getByLabelText("MM/YY")).toHaveAttribute("name", "expiryDate");
      expect(getByLabelText("CVC")).toHaveAttribute("name", "cvc");
      expect(getByTestId("submitButton")).toBeInTheDocument();
    });
  });
  describe("on submit", () => {
    it("dispatches card save", async () => {
        const { getByLabelText, getByTestId } = render(<Profile useDispatchHook={() => mockDispatch}  />);
    
          const cardNameInput = getByLabelText("Имя владельца");
          const cardNumberInput = getByLabelText("Номер карты");
          const expiryDateInput = getByLabelText("MM/YY");
          const cvcInput = getByLabelText("CVC");
    
          await act(async () => {
            fireEvent.change(cardNameInput, { target: { value: "Name" } });
            fireEvent.change(cardNumberInput, { target: { value: "5555 0000 0000 0005" } });
            fireEvent.change(expiryDateInput, { target: { value: "11/23" } });
            fireEvent.change(cvcInput, { target: { value: "999" } });
            fireEvent.click(getByTestId("submitButton"));
          });
    
          expect(mockDispatch).toBeCalledWith({
            payload: { 
              cardName: "Name",
              cardNumber: "5555 0000 0000 0005",
              expiryDate: "11/23",
              cvc: "999"
            },
            type: 'PUSH_CARD_DATA',
          });
    })
  })
});
