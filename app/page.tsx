import CategorySelect from "./components/CategorySelect";
import ProductCard from "./components/ProductCard";
import { openGraphBasicFields, openGraphImage } from "./shared-metadata";
import getProducts from "./util/getProducts";
import getCategories from "./util/getCategories";
import Link from "next/link";
import { HomePageProps, PaginatorProps } from "./type";

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

/**
 * The Home page
 * @param {HomePageProps} props - The properties of the Products page
 * @returns
 */
export default async function HomePage({
  searchParams,
}: HomePageProps) {
  const params = await searchParams;
  const category = params?.category as string | undefined;
  const page = params?.page as string | undefined;

  const data = await getProducts({category,page: page ? Number(page): 1});
  const categories = await getCategories();
  return (
    <div className="flex flex-col justify-center items-center">
      <CategorySelect categories={categories} selectedCategory={category} />
      <div className="flex">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data.products.map((product) => (
            <li key={`product_${product.id}`}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <Paginator category={category} page={data.page} totalPages={data.totalPages}/>
      </div>
    </div>
  )
}

/**
 * A paginator component to navigate through the product pages
 * @param {PaginatorProps} props - The props for the paginator component
 * @returns
 */
function Paginator({ category, page, totalPages = 0 }: PaginatorProps) {
  const previousDisabled = page && page <= 1;
  const nextDisabled = page && page >= totalPages;

  /**
   * Gets the previous page link
   * @returns {string} - The previous page link
   */
  const previousPage = (): string => {
    const newPage = page ? page - 1 : 1;
    if (newPage > 0) {
      return `?page=${newPage}` + (category ? `&category=${category}` : '');
    }
    return ''
  }

  /**
   * Gets the next page link
   * @returns {string} - The next page link
   */
  const nextPage = (): string => {
    const newPage = page ? page + 1 : 2;
    return `?page=${newPage}` + (category ? `&category=${category}` : '');
  }

  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <span>Page {page} of {totalPages}</span>
      <div className="flex flex-row gap-2">
        {!previousDisabled &&
          <Link
            href={previousPage()}
            className='px-4 py-2 bg-gray-300 rounded'
          >
            {"<"}
          </Link>
        }
        {!nextDisabled &&
          <Link
            href={nextPage()}
            className='px-4 py-2 bg-gray-300 rounded'
          >
            {">"}
          </Link>
        }
      </div>
    </div>
  );
}