import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuthButton from './index';
import { useAuth } from '../../providers/AuthProvider';

jest.mock('../../providers/AuthProvider');
jest.mock('../NavLink', () => {
  const MockNavLink = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
  MockNavLink.displayName = 'MockNavLink';
  return MockNavLink;
});

describe('AuthButton', () => {
  const mockLogout = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders login button when no token is present', () => {
    (useAuth as jest.Mock).mockReturnValue({ token: null, logout: mockLogout });

    render(<AuthButton />);

    expect(screen.getByText('Log in')).toBeInTheDocument();
  });

  it('renders logout button when token is present', () => {
    (useAuth as jest.Mock).mockReturnValue({ token: 'fake-token', logout: mockLogout });

    render(<AuthButton />);

    expect(screen.getByText('Log out')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls logout function when logout button is clicked', () => {
    (useAuth as jest.Mock).mockReturnValue({ token: 'fake-token', logout: mockLogout });

    render(<AuthButton />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockLogout).toHaveBeenCalled();
  });

  it('handles logout errors gracefully', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (useAuth as jest.Mock).mockReturnValue({ token: 'fake-token', logout: () => { throw new Error('Logout error'); } });

    render(<AuthButton />);

    fireEvent.click(screen.getByRole('button'));

    expect(consoleErrorSpy).toHaveBeenCalledWith(new Error('Logout error'));

    consoleErrorSpy.mockRestore();
  });
});