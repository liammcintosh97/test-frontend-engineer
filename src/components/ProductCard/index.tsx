import Link from "next/link";
import { ProductCardProps } from "./type";
import Image from 'next/image'
import { CSSProperties } from "react";
import Button from "../Button";
import Rating from "../Rating";

const imageStyle: CSSProperties = {
  height: 200,
  objectFit: 'contain',
}

export default function ProductCard({ product }: ProductCardProps): JSX.Element { 
  return (
      <div className="flex flex-col justify-between p-4 bg-white shadow-sm min-[350px]:w-[300px] max-[350px]:max-w-[300px] h-[500px] border border-slate-100 rounded hover:border-teal-100">
        <Link href={`/products/${product.id}`} className="h-full">
          <div className=" p-4 bg-white flex justify-center align-middle">
            <Image style={imageStyle} src={product.image} alt={product.image} width={200} height={200} />
          </div>
          <div className="flex flex-col justify-around">
            <div>
              <h2 className="line-clamp-2 min">{product.title}</h2>
              <p className="text-sm text-slate-400">{product.category}</p>
            </div>
            <div className="flex flex-row gap-4 content-center mt-4">
              <Rating value={product.rating.rate}/>
              <div className="flex flex-row gap-1">
                <p className="text-xs text-slate-400 text-center">{`${product.rating.rate}`}</p>
                <p className="text-xs text-slate-400 text-center">{`(${product.rating.count})`}</p>
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <div className="bg-red-600 p-2 w-fit">
                <p className="text-slate-100 font-semibold">${product.price}</p>
              </div>
              <div className="w-0 h-0
                border-t-[20px] border-t-transparent
                border-l-[10px] border-l-red-600
                border-b-[20px] border-b-transparent">
              </div>
            </div>
          </div>
        </Link>
        <Button className='w-full' text="Add to Cart" color="green" />
      </div>
  );
}