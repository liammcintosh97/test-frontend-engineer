import CategorySelect from "@/components/CategorySelect";
import { Product } from "./type";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

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

/**
 * Fetches all the categories from the API
 * @returns {Promise<string[]>}
 */
async function getCategories(): Promise<string[]> {
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

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const category = (await searchParams)?.category as string | undefined;

  const products = await getProducts(category);
  const categories = await getCategories();
  return (
    <div className="flex flex-col justify-center items-center">
      <CategorySelect categories={categories} selectedCategory={category} />
      <div className="flex">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <li key={`product_${product.id}`}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}