import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddToCartButton from './index';
import CartProvider from '../../providers/CartProvider';

describe('AddToCartButton', () => {
  const product = {
    id: 1,
    title: 'Test Product',
    price: 10.0,
    image: '/test-image.jpg',
  };

  it('renders without crashing', () => {
    const { getByText } = render(
      <CartProvider>
        <AddToCartButton pid={product.id} />
      </CartProvider>
    );
    expect(getByText('Add to Cart')).toBeInTheDocument();
  });

  it('adds product to cart on click', () => {
    const { getByText } = render(
      <CartProvider>
        <AddToCartButton pid={product.id} />
      </CartProvider>
    );
    const button = getByText('Add to Cart');
    fireEvent.click(button)
  })
});