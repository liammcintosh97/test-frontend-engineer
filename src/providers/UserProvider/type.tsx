/** The decoded User JWT token */
export type DecodedToken = {
  /** id of the user */
  sub: number;
  /** The username of the user */
  user: string;
  /** The time the token was issued */
  iat: number;
}

/** The User */
export type User = {
  /**
   * The id of the user
   */
  id: number,
  /**
   * The email of the user
   */
  email: string,
  /**
   * The username of the user
   */
  username: string,
  /**
   * The password of the user
   */
  password: string,
  /**
   * The name of the user
   */
  name:{
    /**
     * The first name of the user
     */
    firstname: string,
    /**
     * The last name of the user
     */
    lastname: string
  },
  /**
   * The address of the user
   */
  address:{
    /**
     * The city of the user
     */
    city: string,
    /**
     * The street of the user
     */
    street: string,
    /**
     * The number of the user
     */
    number: number,
    /**
     * The zipcode of the user
     */
    zipcode: string,
    /**
     * The geolocation of the user
     */
    geolocation:{
      /**
       * The latitude of the user
       */
      lat: string,
      /**
       * The longitude of the user
       */
      long: string
    }
  },
  /**
   * The phone number of the user
   */
  phone: string
}

/**
 * The UserContextType
 */
export type UserContextType = {
  /**
   * The user
   */
  user: User | null;
}