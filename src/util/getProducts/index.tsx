import { notFound } from "next/navigation";
import { Product } from "./type";

/**
 * Fetches all the products from the API
 * @returns {Promise<Product[]>}
 */
export default async function getProducts(category?: string): Promise<Product[]> {
  try {
    let url = 'https://fakestoreapi.com/products'

    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`
    }

    const res = await fetch(url, {cache: 'force-cache' });
    if (res.status !== 200) {
      if (res.status === 404) {
        notFound()
      }
      throw new Error(`Failed to fetch products ${res.status} - ${res.statusText}`);
    }
    const products = await res.json();
    return products
  } catch (error) {
    if ((error as Error).message === 'Unexpected end of JSON input') {
      notFound()
    }
    throw error;
  }
}