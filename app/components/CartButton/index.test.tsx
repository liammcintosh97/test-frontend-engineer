import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartButton from './index';
import { useCart } from '../../providers/CartProvider';

jest.mock('../../providers/CartProvider');

describe('CartButton', () => {
  it('renders without crashing', () => {
    (useCart as jest.Mock).mockReturnValue({
      state: { items: [{ quantity: 2 }, { quantity: 3 }] },
    });

    render(<CartButton />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('displays the correct number of items in the cart', () => {
    (useCart as jest.Mock).mockReturnValue({
      state: { items: [{ quantity: 2 }, { quantity: 3 }] },
    });

    render(<CartButton />);

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('does not display the item count when there are no items in the cart', () => {
    (useCart as jest.Mock).mockReturnValue({
      state: { items: [] },
    });

    render(<CartButton />);

    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });
});