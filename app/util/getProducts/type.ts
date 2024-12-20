/**
 * The type definitions for the getProducts function
 */
export type GetProductData = {
  /** The current page */
  page: number | undefined,
  /**
   * The total number of pages
   */
  totalPages: number | undefined,
  /** The products on the page */
  products: Product[],
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