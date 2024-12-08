

import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import NavBar from '.';
import CartProvider from '../../providers/CartProvider';

describe('NavBar component', () => {
  it('renders the Home link with correct href', () => {
    render(
      <CartProvider>
        <NavBar />
      </CartProvider>
    );
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');
  });
});