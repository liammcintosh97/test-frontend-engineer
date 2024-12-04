import CategorySelect from "@/components/CategorySelect";
import { Product } from "./type";
import ProductCard from "@/components/ProductCard";

/**
 * Fetches all the products from the API
 * @returns {Promise<Product[]>}
 */
async function getProducts(category?: string): Promise<Product[]> {
  try {
    let url = 'https://fakestoreapi.com/products'

    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`
    }

    const res = await fetch(url, {cache: 'force-cache' });
    if (res.status !== 200) {
      throw new Error(`Failed to fetch products ${res.status} - ${res.statusText}`);
    }
    const products = await res.json();
    return products
  } catch (error) {
    throw error;
  }
}

/**
 * Fetches all the categories from the API
 * @returns {Promise<string[]>}
 */
async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch('https://fakestoreapi.com/products/categories', {cache: 'force-cache' });
    if (res.status !== 200) {
      throw new Error(`Failed to fetch products ${res.status} - ${res.statusText}`);
    }
    const products = await res.json();
    return products
  } catch (error) {
    throw error;
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const category = searchParams?.category as string | undefined;

  const products = await getProducts(category);
  const categories = await getCategories();
  return (
    <div>
      <section>
        <CategorySelect categories={categories} selectedCategory={category} />
      </section>
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