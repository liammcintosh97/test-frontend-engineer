import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '.';
import { ProductCardProps } from './type';
import { Providers } from '../../providers';

describe('ProductCard Component', () => {
  const product: ProductCardProps['product'] = {
    id: 1,
    title: 'Sample Product',
    category: 'Sample Category',
    image: '/sample.jpg',
    description: 'Sample Description',
    rating: {
      rate: 4.5,
      count: 10,
    },
    price: "99.99",
  };

  it('should render without crashing', () => {
    const { container } = render(
      <Providers>
        <ProductCard product={product} />
      </Providers>
    );
    expect(container).toBeInTheDocument();
  });

  it('should display the product title', () => {
    const { getByText } = render(
      <Providers>
        <ProductCard product={product} />
      </Providers>
    );
    expect(getByText('Sample Product')).toBeInTheDocument();
  });

  it('should display the product category', () => {
    const { getByText } = render(
      <Providers>
        <ProductCard product={product} />
      </Providers>
    )
    expect(getByText('Sample Category')).toBeInTheDocument();
  });

  it('should display the product price', () => {
    const { getByText } = render(
      <Providers>
        <ProductCard product={product} />
      </Providers>
    )
    expect(getByText('$99.99')).toBeInTheDocument();
  });

  it('should display the product rating', () => {
    const { getByText } = render(
      <Providers>
        <ProductCard product={product} />
      </Providers>
    )
    expect(getByText('4.5')).toBeInTheDocument();
    expect(getByText('(10)')).toBeInTheDocument();
  });

  it('should display the "Add to Cart" button', () => {
    const { getByText } = render(
      <Providers>
        <ProductCard product={product} />
      </Providers>
    )
    expect(getByText('Add to Cart')).toBeInTheDocument();
  });
});