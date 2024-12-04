import { ProductPage } from "./type"
import { Product as ProductType} from "../type"

/**
 * Fetched the product from the API based on the slug
 * @returns {Promise<Product[]>}
 */
async function getProduct(slug: string): Promise<ProductType> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${slug}`, {cache: 'force-cache', next: { revalidate: 30 } });
    if (res.status !== 200) {
      throw new Error(`Failed to fetch product ${res.status} - ${res.statusText}`);
    }
    const products = await res.json();
    return products
  } catch (error) {
    throw error;
  }
}

export default async function Product({
  params,
}: ProductPage) {
  const slug = (await params).slug
  const product = await getProduct(slug);
  return <div>Product: {product.title}</div>
}