import { notFound } from "next/navigation";

/**
 * Fetches all the categories from the API
 * @returns {Promise<string[]>}
 */
export default async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories', {cache: 'force-cache' });
    if (res.status !== 200) {
      if (res.status === 404) {
        notFound()
      }
      throw new Error(`Failed to fetch categories ${res.status} - ${res.statusText}`);
    }
    const categories = await res.json();
    return categories
  } catch (error) {
    if ((error as Error).message === 'Unexpected end of JSON input') {
      notFound()
    }
    throw error;
  }
}