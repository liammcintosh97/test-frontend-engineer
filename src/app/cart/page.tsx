"use client"
import { useCart } from "@/providers/CartProvider";
import { Product } from "@/util/getProducts/type";
import { CSSProperties, useEffect, useState } from "react";
import Image from 'next/image'
import Button from "@/components/Button";

const imageStyle: CSSProperties = {
  height: 50,
  objectFit: 'contain',
}

export default function CartPage() {
  const { state, getCartProducts, dispatch} = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getCartProducts()
      .then(setProducts)
      .catch(e => {
        throw new Error(e.message);
      });
  }, [getCartProducts, setProducts])

  console.log('Cart Products:', products);
  console.log('Cart State:', state);

  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center flex-row gap-4 w-fit p-4 bg-white shadow-sm border border-slate-100 rounded">
        {products.map(product => {
          const quantity = state.items.find(item => item.id === product.id)?.quantity;

          return (
            <div key={product.id} className="flex rounded flex-row items-center gap-4 border border-slate-400 w-full pr-4">
              <div className=" p-4 bg-white flex justify-center align-middle">
                <Image style={imageStyle} src={product.image} alt={product.title} width={50} height={50} />
              </div>
              <h3 className="text-lg max-w-60 line-clamp-1">{product.title}</h3>
              <p>${product.price}</p>
              <div>
                <Button onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: product.id, quantity: 1 } })}></Button>
                <p>{state.items.find(item => item.id === product.id)?.quantity}</p>
                <Button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: product.id, quantity: 1} })}></Button>
              </div>
              {quantity && <p>Subtotal: ${Number(product.price) * quantity}</p>}
            </div>
          )
    })}
      </div>
    </div>
  )
}