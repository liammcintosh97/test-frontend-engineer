import { MetaData} from "../type"
import Image from 'next/image'
import Rating from "@/components/Rating";
import PriceTag from "@/components/PriceTag";
import Button from "@/components/Button";
import { openGraphBasicFields, openGraphImage } from "../shared-metadata";
import getProduct from "@/util/getProduct";
import { ProductPageProps } from "./type";

/**
 * Generates the meta data for the Product page
 * @param {ProductPageProps} props - The meta data properties
 * @returns {Promise<>}
 */
export async function generateMetadata({
  params
}: ProductPageProps): Promise<MetaData> {
  const product = await getProduct(parseInt((await params).slug))
  const title = `eStore - ${product.title}`

  return {
    title: title,
    description: product.description,
    openGraph:{
      ...openGraphImage,
      ...openGraphBasicFields,
      title: title,
      description: product.description
    }
  }
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const slug = (await params).slug
  const product = await getProduct(parseInt(slug));
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