import { Product } from "./type";
import ProductCard from "@/components/ProductCard";

/**
 * Fetches all the products from the API
 * @returns {Promise<Product[]>}
 */
async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {cache: 'force-cache' });
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
      <section className="flex justify-center">
        <div className="flex">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <li key={`product_${product.id}`}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}