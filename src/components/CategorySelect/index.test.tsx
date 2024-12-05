import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import CategorySelect from '.';

describe('CategorySelect component', () => {
  const categories = ['Category1', 'Category2', 'Category3'];

  it('renders correctly with categories', () => {
    render(<CategorySelect categories={categories} selectedCategory={undefined} />);
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('applies selected class to the selected category', () => {
    render(<CategorySelect categories={categories} selectedCategory="Category2" />);
    const selectedButton = screen.getByText('Category2');
    expect(selectedButton).toHaveClass('bg-blue-500 hover:bg-blue-700');
  });

  it('applies default class to non-selected categories', () => {
    render(<CategorySelect categories={categories} selectedCategory="Category2" />);
    const nonSelectedButton = screen.getByText('Category1');
    expect(nonSelectedButton).toHaveClass('bg-cyan-500 hover:bg-cyan-700');
  });

  it('renders "All" button with selected class when no category is selected', () => {
    render(<CategorySelect categories={categories} selectedCategory={undefined} />);
    const allButton = screen.getByText('All');
    expect(allButton).toHaveClass('bg-blue-500 hover:bg-blue-700');
  });

  it('renders "All" button with default class when a category is selected', () => {
    render(<CategorySelect categories={categories} selectedCategory="Category1" />);
    const allButton = screen.getByText('All');
    expect(allButton).toHaveClass('bg-cyan-500 hover:bg-cyan-700');
  });
});