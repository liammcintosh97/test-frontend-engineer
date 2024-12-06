"use client";
import { useCart } from "@/providers/CartProvider";
import { AddToCartButtonProps } from "./type";
import Button from "../Button";

export default function AddToCartButton({ pid, className, ...restProps }: AddToCartButtonProps): JSX.Element {
  const { dispatch } = useCart();
  const _className = ` bg-green-500 hover:bg-green-700 ${className ? className : ''}`

  return (
    <Button
      {...restProps}
      onClick={() => dispatch({ type: 'ADD_ITEM', payload: { id: pid, quantity: 1} })}
      className={_className}
    >
      Add to Cart
    </Button>
  );
}