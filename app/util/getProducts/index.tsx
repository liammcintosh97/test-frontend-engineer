import { notFound } from "next/navigation";
import { GetProductData } from "./type";

/**
 * Fetches all the products from the API
 * @returns {Promise<Product[]>}
 */
export default async function getProducts(options: {category?: string, page: number}): Promise<GetProductData> {
  try {
    const {category, page = 1} = options
    let url = 'https://fakestoreapi.com/products'

    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`
    }

    const res = await fetch(url, {cache: 'force-cache', next: { revalidate: 30 } });
    if (res.status !== 200) {
      if (res.status === 404) {
        notFound()
      }
      throw new Error(`Failed to fetch products ${res.status} - ${res.statusText}`);
    }
    const products = await res.json();
    if (page === -1) {
      return {products, page: undefined, totalPages: undefined}
    } else {
      const pageSize = 4;

      const paginatedProducts = products.slice((page - 1) * pageSize, page * pageSize);

      const data: GetProductData = {
        page,
        totalPages: Math.ceil(products.length / pageSize),
        products: paginatedProducts
      }
      return data;
    }
  } catch (error) {
    if ((error as Error).message === 'Unexpected end of JSON input') {
      notFound()
    }
    throw error;
  }
}