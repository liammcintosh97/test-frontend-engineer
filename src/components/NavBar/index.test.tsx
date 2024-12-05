

import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import NavBar from '.';

describe('NavBar component', () => {
  it('renders the Home link with correct href', () => {
    render(<NavBar />);
    const homeLink = screen.getByText('Home').closest('a');
    expect(homeLink).toHaveAttribute('href', '/');
  });
});