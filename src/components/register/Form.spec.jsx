import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Form } from './Form';
import { BrowserRouter } from 'react-router-dom';

const mockDispatch = jest.fn();

describe('Auth form', () => {
  describe('renders', () => {
    it('renders correctly', () => {
      const { getByLabelText, getByTestId } = render(
        <BrowserRouter>
          <Form useDispatchHook={() => mockDispatch} />
        </BrowserRouter>
      );
      expect(getByLabelText('Email*')).toHaveAttribute('name', 'email');
      expect(getByLabelText('Придумайте пароль*')).toHaveAttribute(
        'name',
        'password'
      );
      expect(getByTestId('submitButton')).toBeInTheDocument();
    });
  });
  describe('on submit', () => {
    it('dispatches registration', async () => {
      const { getByLabelText, getByTestId } = render(
        <BrowserRouter>
          <Form useDispatchHook={() => mockDispatch} />
        </BrowserRouter>
      );

      const nameInput = getByLabelText('Имя?*');
      const surnameInput = getByLabelText('Фамилия?*');
      const emailInput = getByLabelText('Email*');
      const passwodrInput = getByLabelText('Придумайте пароль*');

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: 'test@email.ru' } });
        fireEvent.change(passwodrInput, { target: { value: 'testPassword' } });
        fireEvent.change(nameInput, { target: { value: 'Name' } });
        fireEvent.change(surnameInput, { target: { value: 'Surname' } });
        fireEvent.click(getByTestId('submitButton'));
      });

      expect(mockDispatch).toBeCalledWith({
        payload: { 
            email: 'test@email.ru',
            password: 'testPassword',
            name: 'Name',
            surname: 'Surname',
        },
        type: 'REGISTRATION',
      });
    });
  });
});
