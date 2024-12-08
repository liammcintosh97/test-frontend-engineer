import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './index';
import '@testing-library/jest-dom';
import { Providers } from '../../providers';

describe('CheckoutForm', () => {
  const renderComponent = () => {
    return render(
      <Providers>
        <CheckoutForm />
      </Providers>
    );
  };

  test('renders the form fields correctly', async () => {
    renderComponent();

    expect(await screen.findByLabelText(/First Name/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Email/i)).toBeInTheDocument();
    expect(await screen.findByLabelText('Number')).toBeInTheDocument();
    expect(await screen.findByLabelText(/Street Address/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/City/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/State/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Postal Code/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Country/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Card Number/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/Expiry Date/i)).toBeInTheDocument();
    expect(await screen.findByLabelText(/CVV/i)).toBeInTheDocument();
  });

  test('submits the form and clears the cart', async () => {
    renderComponent();

    const firstNameInput = await screen.findByLabelText(/First Name/i);
    const lastNameInput = await screen.findByLabelText(/Last Name/i);
    const emailInput = await screen.findByLabelText(/Email/i);
    const numberInput = await screen.findByLabelText('Number');
    const streetAddressInput = await screen.findByLabelText(/Street Address/i);
    const cityInput = await screen.findByLabelText(/City/i);
    const stateInput = await screen.findByLabelText(/State/i);
    const postalCodeInput = await screen.findByLabelText(/Postal Code/i);
    const countryInput = await screen.findByLabelText(/Country/i);
    const cardNumberInput = await screen.findByLabelText(/Card Number/i);
    const expiryDateInput = await screen.findByLabelText(/Expiry Date/i);
    const cvvInput = await screen.findByLabelText(/CVV/i);

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { value: 'John' } });
      fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
      fireEvent.change(numberInput, { target: { value: '1234567890' } });
      fireEvent.change(streetAddressInput, { target: { value: '123 Main St' } });
      fireEvent.change(cityInput, { target: { value: 'Anytown' } });
      fireEvent.change(stateInput, { target: { value: 'CA' } });
      fireEvent.change(postalCodeInput, { target: { value: '12345' } });
      fireEvent.change(countryInput, { target: { value: 'USA' } });
      fireEvent.change(cardNumberInput, { target: { value: '4111111111111111' } });
      fireEvent.change(expiryDateInput, { target: { value: '12/23' } });
      fireEvent.change(cvvInput, { target: { value: '123' } });

      const submitButton = screen.getByRole('button', { name: /Checkout/i });
      fireEvent.click(submitButton);
    });

    expect(firstNameInput).toHaveValue('');
    expect(lastNameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(numberInput).toHaveValue('');
    expect(streetAddressInput).toHaveValue('');
    expect(cityInput).toHaveValue('');
    expect(stateInput).toHaveValue('');
    expect(postalCodeInput).toHaveValue('');
    expect(countryInput).toHaveValue('');
    expect(cardNumberInput).toHaveValue('');
    expect(expiryDateInput).toHaveValue('');
    expect(cvvInput).toHaveValue('');
  });
});