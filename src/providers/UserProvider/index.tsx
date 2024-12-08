import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { DecodedToken, User, UserContextType } from './type';
import { useAuth } from '../AuthProvider';

const UserContext = createContext<UserContextType | undefined>(undefined);

/**
 * A provider to provide the user context
 * @param {{children: ReactNode}} props - The children to render
 * @returns {JSX.Element}
 */
export const UserProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const {token} = useAuth()
  const [user, setUser] = useState<User | null>(null);

  /**
   * Fetches the user data from the api
   * @param {number} id - The id of the user to fetch
   * @returns {Promise<User>} - The user data
   */
  const getUser = useCallback(async (id: number): Promise<User> => {
    try {
      const res = await fetch(`https://fakestoreapi.com/users/${id}`);
      if (res.status !== 200) {
        throw new Error(`Failed to fetch user ${res.status} - ${res.statusText}`);
      }
      const user = await res.json();
      return user
    } catch (error) {
      throw error
    }
  }, [])

  useEffect(() => {
    if (token) {
      const decodedToken = parseJwt(token);
      getUser(decodedToken.sub)
        .then(user => setUser(user))
        .catch(error => console.error('unable to get user data - ' + error.message))
    } else {
      setUser(null)
    }
  },[token])

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Parses the jwt token into a DecodedToken object
 * @param {string} token - The token to parse
 * @returns {DecodedToken} - The DecodedToken object
 */
function parseJwt (token: string): DecodedToken {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

/**
 * A hook to use the user context
 * @returns {UserContextType}
 */
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};