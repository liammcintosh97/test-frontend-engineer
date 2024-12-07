"use client"
import { useCart } from "@/providers/CartProvider";
import { Product } from "@/util/getProducts/type";
import Image from 'next/image'
import { CSSProperties, DetailedHTMLProps, TdHTMLAttributes, ThHTMLAttributes, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const imageStyle: CSSProperties = {
  height: 50,
  objectFit: 'contain',
}

/**
 * Renders a td element with padding
 * @param {DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>} props - The table data properties
 * @returns {JSX.Element}
 */
export function TableData({children, className, ...restProps}: DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>): JSX.Element {
  className = `p-2 ${className ? className : ''}`

  return (
    <td {...restProps} className={className}>
      {children}
    </td>
  )
}

/**
 * Renders a th element with padding
 * @param {DetailedHTMLProps<ThHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>} props - The table header properties
 * @returns {JSX.Element}
 */
export function TableHeader({children, className, ...restProps}: DetailedHTMLProps<ThHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>): JSX.Element {
  className = `p-2 ${className ? className : ''}`

  return (
    <th {...restProps} className={className}>
      {children}
    </th>
  )
}

/**
 * Formats a number to a fixed 2 decimal places
 * @param {string | number} x - The number to format
 * @returns {string}
 */
export function financial(x: string | number): string {
  return Number(x).toFixed(2);
}

/**
 * The user's cart
 * @returns {JSX.Element}
 */
export default function Cart(): JSX.Element {
  const { state, getCartProducts, dispatch} = useCart();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getCartProducts()
      .then(setProducts)
      .catch(e => {
        throw new Error(e.message);
      });
  }, [getCartProducts, setProducts])

  /**
   * Gets the quantity of a product in the cart
   * @param {Product} product - The product to get the quantity of
   * @returns {number}
   */
  const getQuantity = (product: Product): number => {
    return state.items.find(item => item.id === product.id)?.quantity || 0;
  }

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <TableHeader>Item</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Quantity</TableHeader>
          <TableHeader>Sub Total</TableHeader>
        </tr>
      </thead>
      <tbody>
        {products.map(product => {
          const quantity = getQuantity(product);
          return (
            <tr key={product.id}>
              <TableData>
                <div className="flex flex-row gap-2 justify-center items-center">
                  <div className="bg-white flex justify-center align-middle">
                    <Image style={imageStyle} src={product.image} alt={product.title} width={50} height={50} />
                  </div>
                  <h3 className="max-sm:w-0 text-lg max-w-60 line-clamp-1">{product.title}</h3>
                </div>
              </TableData>
              <TableData>
                <p>${financial(product.price)}</p>
              </TableData>
              <TableData>
                <div className="flex flex-col justify-center items-center">
                  <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: product.id, quantity: 1 } })}>
                    <FaChevronUp color='#334155'/>
                  </button>
                  <p>{state.items.find(item => item.id === product.id)?.quantity}</p>
                  <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: product.id, quantity: 1} })}>
                    <FaChevronDown color='#334155'/>
                  </button>
                </div>
              </TableData>
              <TableData>
                {quantity && <p>${financial(Number(product.price) * quantity)}</p>}
              </TableData>
            </tr>
          )
        })}
        <tr>
          <TableData colSpan={4}>
            <div className="flex flex-row justify-end items-center gap-2">
              <h3 className="text-lg">Total</h3>
              <p>${financial(products.reduce((acc, product) => {
              const quantity = getQuantity(product);
              return acc + (Number(product.price) * quantity);
              }, 0))}</p>
            </div>
          </TableData>
        </tr>
      </tbody>
    </table>
  )
}