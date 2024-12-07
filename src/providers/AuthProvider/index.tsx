import { Context, createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { AuthContextType } from "./type";

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
      /**
       * When I was developing this I noticed that the API always returned error 400 even when using
       * the provided credentials in the documentation. so I decided to mock the response.
       * I'm going to leave the code commented out so you can still see how it would work.
      /*
      const res = await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body: JSON.stringify({username, password}),
      })

      if (!res.ok) {
        throw new Error('Login failed')
      }

      const data = await res.json()
      */
      const mockData = {token:'abc123'}
      localStorage.setItem('token',mockData.token)
      setToken(mockData.token)

      return mockData
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