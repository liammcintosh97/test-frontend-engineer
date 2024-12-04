export type ErrorProps = {
  /** The error that was thrown */
  error: Error & {
    /** An automatically generated hash of the error thrown. It can be used to match the corresponding error in server-side logs. */
    digest?: string
  }
  /** Attempts to recover from the error */
  reset: () => void
}

/**The object which presents a product from the Fake Store API */
export type Product = {
  /** The unique identifier for the product */
  id: number,
  /** The title of the product */
  title: string ,
  /** The price of the product */
  price: string,
  /** The category of the product */
  category: string,
  /** The description of the product */
  description: string,
  /** The url string to the image of the product */
  image: string
  /** The rating data of the product */
  rating: {
    /** The average user rating */
    rate: number,
    /** The number of ratings */
    count: number
  }
}