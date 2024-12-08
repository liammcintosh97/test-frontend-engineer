import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '.';

describe('Input Component', () => {
  test('renders the input component', () => {
    const { getByPlaceholderText } = render(<Input label="test" placeholder="Enter text" />);
    const inputElement = getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  test('calls onChange handler when text is entered', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(<Input label="test"  placeholder="Enter text" onChange={handleChange} />);
    const inputElement = getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('displays the correct value', () => {
    const { getByDisplayValue } = render(<Input label="test"  defaultValue="Test value" />);
    const inputElement = getByDisplayValue('Test value');
    expect(inputElement).toBeInTheDocument();
  });

  test('renders with the correct type', () => {
    const { getByPlaceholderText } = render(<Input label="test"  placeholder="Enter text" type="password" />);
    const inputElement = getByPlaceholderText('Enter text');
    expect(inputElement).toHaveAttribute('type', 'password');
  });
});