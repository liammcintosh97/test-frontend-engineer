import CategorySelect from "@/components/CategorySelect";
import ProductCard from "@/components/ProductCard";
import { openGraphBasicFields, openGraphImage } from "./shared-metadata";
import getProducts from "@/util/getProducts";
import getCategories from "@/util/getCategories";

const title = 'eStore - Home'
const description =  'The eStore home page '

export const metadata = {
  title: title,
  description: description,
  openGraph:{
    ...openGraphImage,
    ...openGraphBasicFields,
    title: title,
    description: description
  }
}

export default async function HomePage({
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