/**
 * AuthContextType
 */
export type AuthContextType = {
  /**
   * The token of the user
   */
  token: string | undefined | null;
  /**
   * Logs in the user
   * @param {string} username - the username of the user
   * @param {string} password - the password of the user
   * @returns {Promise<AuthData>}
   */
  login: (username: string, password: string) => Promise<AuthData>;
  /**
   * Logs out the user
   */
  logout: () => void;
}

/**
 * the data returned from the login API
 */
export type AuthData = {
  /**
   * the token of the user
   */
  token: string;
}