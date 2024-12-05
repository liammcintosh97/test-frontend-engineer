import { ProductPage } from "./type"
import { Product as ProductType} from "../type"
import Image from 'next/image'
import Rating from "@/components/Rating";
import PriceTag from "@/components/PriceTag";
import Button from "@/components/Button";
import { notFound } from 'next/navigation'

/**
 * Fetched the product from the API based on the slug
 * @returns {Promise<Product[]>}
 */
async function getProduct(slug: string): Promise<ProductType> {
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

export default async function Product({
  params,
}: ProductPage) {
  const slug = (await params).slug
  const product = await getProduct(slug);
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center flex-row gap-8 w-fit p-4 bg-white shadow-sm border border-slate-100 rounded">
        <div className=" p-4 bg-white flex justify-center align-middle">
          <Image src={product.image} alt={product.image} width={400} height={300} />
        </div>
        <div className="flex flex-col max-w-[500px] justify-between">
          <div className="flex flex-col">
            <div>
              <h2 className="line-clamp-2 min">{product.title}</h2>
              <div className="flex flex-row gap-4">
                <p className="text-sm text-slate-400">{product.category}</p>
                <p className="text-sm text-slate-400">pid: {product.id}</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 content-center mt-4">
              <Rating value={product.rating.rate}/>
              <div className="flex flex-row gap-1">
                <p className="text-xs text-slate-400 text-center">{`${product.rating.rate}`}</p>
                <p className="text-xs text-slate-400 text-center">{`(${product.rating.count})`}</p>
              </div>
            </div>
            <p className="mt-4">{product.description}</p>
            <PriceTag className="mt-4"price={product.price}/>
          </div>
          <Button className='w-full bg-green-500 hover:bg-green-700 mt-8 max-w-52'>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}