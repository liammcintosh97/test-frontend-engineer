import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from './index';
import { Product } from '@/util/getProducts/type';
import {CartProvider} from '@/providers/CartProvider';

jest.mock('next/image', () => {
  return {
    Image: () => {
      return <>test</>;
    }
  }
});

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    category: 'electronics',
    description: 'Product 1 description',
    price: "10",
    image: '/product1.jpg',
    rating: { rate: 4, count: 10 },
  },
  {
    id: 2,
    category: 'electronics',
    description: 'Product 2 description',
    title: 'Product 2',
    price: "20",
    image: '/product2.jpg',
    rating: { rate: 3, count: 10 },
  },
];

jest.mock('../../providers/CartProvider', () => ({
  useCart: () => ({
    state: {
      items: [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 1 },
      ],
    },
    getCartProducts: jest.fn().mockResolvedValue(mockProducts),
    dispatch: jest.fn(),
  }),
}));

describe('Cart Component', () => {
  it('renders the cart with products', async () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    expect(await screen.findByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();

    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('$40.00')).toBeInTheDocument();
  });

  it('increments the product quantity', async () => {
    const { getByText } = render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    const incrementButton = await screen.findAllByRole('button', { name: '' });
    fireEvent.click(incrementButton[0]);

    expect(getByText('3')).toBeInTheDocument();
  });

  it('decrements the product quantity', async () => {
    const { getByText } = render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    const decrementButton = await screen.findAllByRole('button', { name: '' });
    fireEvent.click(decrementButton[1]);

    expect(getByText('1')).toBeInTheDocument();
  });

  it('displays the correct total price', async () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    expect(await screen.findByText('$40.00')).toBeInTheDocument();
  });
});