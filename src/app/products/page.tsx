import Link from "next/link";
import { Product } from "./type";

/**
 * Fetches all the products from the API
 * @returns {Promise<Product[]>}
 */
async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {cache: 'force-cache', next: { revalidate: 30 } });
    if (res.status !== 200) {
      throw new Error(`Failed to fetch products ${res.status} - ${res.statusText}`);
    }
    const products = await res.json();
    return products
  } catch (error) {
    throw error;
  }
}

export default async function Products() {
  const products = await getProducts();
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={`product_${product.id}`}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}