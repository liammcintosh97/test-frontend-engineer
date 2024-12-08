import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavLink from './index';

describe('NavLink component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(
      <NavLink href="/">Home</NavLink>
    );
    expect(getByText('Home')).toBeInTheDocument();
  });

  it('renders the correct href attribute', () => {
    const { getByText } = render(
        <NavLink href="/cart">Cart</NavLink>
    );
    expect(getByText('Cart').closest('a')).toHaveAttribute('href', '/cart');
  });
});