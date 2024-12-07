import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './index';
import { CartProvider } from '@/providers/CartProvider';
import '@testing-library/jest-dom';

describe('CheckoutForm', () => {
  const renderComponent = () => {
    return render(
      <CartProvider>
        <CheckoutForm />
      </CartProvider>
    );
  };

  test('renders the form fields correctly', () => {
    renderComponent();

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Number')).toBeInTheDocument();
    expect(screen.getByLabelText(/Street Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Postal Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Card Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Expiry Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CVV/i)).toBeInTheDocument();
  });

  test('submits the form and clears the cart', () => {
    renderComponent();

    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const numberInput = screen.getByLabelText('Number');
    const streetAddressInput = screen.getByLabelText(/Street Address/i);
    const cityInput = screen.getByLabelText(/City/i);
    const stateInput = screen.getByLabelText(/State/i);
    const postalCodeInput = screen.getByLabelText(/Postal Code/i);
    const countryInput = screen.getByLabelText(/Country/i);
    const cardNumberInput = screen.getByLabelText(/Card Number/i);
    const expiryDateInput = screen.getByLabelText(/Expiry Date/i);
    const cvvInput = screen.getByLabelText(/CVV/i);

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