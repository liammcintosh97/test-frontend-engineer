import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import PriceTag from '.';

describe('PriceTag Component', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<PriceTag price={"100"} />);
    expect(getByText('$100')).toBeInTheDocument();
  });

  it('should apply the passed className', () => {
    const { container } = render(<PriceTag price={"100"} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should render the price correctly', () => {
    const { getByText } = render(<PriceTag price={"200"} />);
    expect(getByText('$200')).toBeInTheDocument();
  });

  it('should render the price with correct styles', () => {
    const { getByText } = render(<PriceTag price={"300"} />);
    const priceElement = getByText('$300');
    expect(priceElement).toHaveClass('text-slate-100 font-semibold');
  });

  it('should render the triangle correctly', () => {
    const { container } = render(<PriceTag price={"400"} />);
    const triangleElement = container.querySelector('div > div:nth-child(2)');
    expect(triangleElement).toHaveClass('border-t-[20px] border-t-transparent border-l-[10px] border-l-red-600 border-b-[20px] border-b-transparent');
  });
});