"use client";
import { FaShoppingCart } from "react-icons/fa";
import NavLink from "../NavLink";
import { useCart } from "@/providers/CartProvider";
import { useCallback } from "react";

/**
 * The CartButton component
 * @returns {JSX.Element}
 */
export default function CartButton(): JSX.Element {
  const {state} = useCart();

  const getTotalItems = useCallback(() => {
    return state.items.reduce((acc, item) => acc + item.quantity, 0)
  }, [state])

  const totalItems = getTotalItems();

  return (
    <NavLink href="/cart">
      {totalItems > 0 && <div className="ml-5 flex justify-center items-center w-4 h-4 rounded-full bg-red-500 text-slate-100 text-sm absolute">{totalItems}</div> }
      <div className='rounded-full bg-teal-600 p-2' >
        <FaShoppingCart color='#e2e8f0' size={20}/>
      </div>
    </NavLink>
  )
}