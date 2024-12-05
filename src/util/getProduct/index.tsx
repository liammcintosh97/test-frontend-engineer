import { notFound } from "next/navigation";
import { Product } from "../getProducts/type";

/**
 * Fetched the product from the API based on the slug
 * @returns {Promise<Product[]>}
 */
export default async function getProduct(slug: string): Promise<Product> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${slug}`, {cache: 'force-cache', next: { revalidate: 30 } });
    if (res.status !== 200) {
      if (res.status === 404) {
        notFound()
      }
      throw new Error(`Failed to fetch product ${res.status} - ${res.statusText}`);
    }
    const product = await res.json();
    return product
  } catch (error) {
    if ((error as Error).message === 'Unexpected end of JSON input') {
      notFound()
    }
    throw error
  }
}
