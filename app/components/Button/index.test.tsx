import React from 'react';
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button component', () => {
  it('renders a button with default className', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('text-slate-100 font-bold py-2 px-4 rounded bg-slate-500 hover:bg-slate-700');
  });

  it('renders a button with custom className', () => {
    render(<Button className="custom-class">Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('text-slate-100 font-bold py-2 px-4 rounded custom-class');
  });

  it('renders a link when href is provided', () => {
    render(<Button href="/test">Click me</Button>);
    const linkElement = screen.getByText('Click me').closest('a');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test');
  });

  it('calls onClick handler when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});