import { Context, createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { AuthContextType, AuthData } from "./type";
import axios from "axios";

/**
 * The context for the auth.
 *
 * @type {Context<AuthContextType | undefined>}
 */
const AuthContext: Context<AuthContextType | undefined> = createContext<AuthContextType | undefined>({
  token : undefined,
  login: async () => ({token: ''}),
  logout: () => {}
});

/**
 * The AuthProvider component provides the authentication state of the user.
 * @param {{ children: ReactNode }} props - The children to render.
 * @returns
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | undefined | null>(undefined);

  const login = useCallback(async(username: string, password: string) => {
    try {
      console.log(JSON.stringify({username, password}))

      const res = await axios<AuthData>({
        url: 'https://fakestoreapi.com/auth/login',
        method:'POST',
        data: {username, password},
      })

      if (res.status !== 200) {
        throw new Error('Login failed')
      }


      localStorage.setItem('token',res.data.token)
      setToken(res.data.token)

      return res.data
    } catch (error) {
      throw error
    }
  },[])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    setToken(undefined)
  }, [])

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  },[])

  return <AuthContext.Provider value={{token, login, logout}}>{children}</AuthContext.Provider>;
};

/**
 * A custom hook to access the auth context.
 * @returns {AuthContextType}
 */
export const useAuth = (): AuthContextType  => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};