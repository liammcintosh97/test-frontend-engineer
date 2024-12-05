import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rating from '../Rating';

describe('Rating Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Rating value={3} />);
    expect(container).toBeInTheDocument();
  });

  it('should render the correct number of highlighted stars for whole number ratings', () => {
    const { container } = render(<Rating value={3} />);
    const highlightedStars = container.querySelectorAll('svg[style="color: rgb(253, 224, 71);"]');
    expect(highlightedStars.length).toBe(3);
  });

  it('should render no highlighted stars for a rating of 0', () => {
    const { container } = render(<Rating value={0} />);
    const highlightedStars = container.querySelectorAll('svg[fill="#fde047"]');
    expect(highlightedStars.length).toBe(0);
  });

  it('should render all highlighted stars for a rating of 5', () => {
    const { container } = render(<Rating value={5} />);
    const highlightedStars = container.querySelectorAll('svg[style="color: rgb(253, 224, 71);"]');
    expect(highlightedStars.length).toBe(5);
  });
});