import Link from "next/link";
import { ProductCardProps } from "./type";
import Image from 'next/image'
import { CSSProperties } from "react";
import Button from "../Button";
import Rating from "../Rating";
import PriceTag from "../PriceTag";

const imageStyle: CSSProperties = {
  height: 200,
  objectFit: 'contain',
}

export default function ProductCard({ product }: ProductCardProps): JSX.Element { 
  return (
      <div className="flex flex-col justify-between p-4 bg-white shadow-sm min-[350px]:w-[300px] max-[350px]:max-w-[300px] h-[500px] border border-slate-100 rounded hover:border-teal-100">
        <Link href={`/${product.id}`} className="h-full">
          <div className=" p-4 bg-white flex justify-center align-middle">
            <Image style={imageStyle} src={product.image} alt={product.image} width={200} height={200} />
          </div>
          <div className="flex flex-col justify-around">
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
            <PriceTag className="mt-4" price={product.price}/>
          </div>
        </Link>
        <Button className='w-full bg-green-500 hover:bg-green-700'>Add to Cart</Button>
      </div>
  );
}