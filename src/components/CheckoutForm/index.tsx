"use client"

import { useCart } from "@/providers/CartProvider"
import { getTotal } from "../Cart"
import Input from "../Input"
import { useEffect, useState } from "react"
import { Product } from "@/util/getProducts/type"
import Button from "../Button"

/**
 * The checkout form component
 * @returns {JSX.Element}
 */
export default function CheckoutForm(): JSX.Element {
  const {state, getCartProducts, dispatch} = useCart()
  const [products, setProducts] = useState<Product[]>([])

  /**
   * Handles the form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form event
   */
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('onSubmit')
    const form = e.currentTarget as HTMLFormElement
    form.reset();
    dispatch({type: 'CLEAR_CART'})
  }

  useEffect(() => {
    getCartProducts()
      .then(setProducts)
      .catch(e => {
        throw new Error(e.message);
      });
  }, [getCartProducts, setProducts])

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <fieldset>
        <p className="text-l font-semibold mb-2  text-slate-700">Contact Details</p>
        <div className="flex flex-row flex-wrap gap-2 ">
          <Input label="First Name" id="first_name" name="first_name" autoComplete='name' type='text' required />
          <Input label="Last Name" id="last_name" name="last_name" autoComplete='family-name' type='text' required />
          <Input label="Email" id="email" name="email" autoComplete='email' type='email' />
          <Input label="Number" id="number" name="number" autoComplete='mobile tel' type='tel' />
        </div>
      </fieldset>
      <fieldset>
        <p className="text-l font-semibold mb-2 text-slate-700">Address Details</p>
        <div className="flex flex-row flex-wrap gap-2">
          <Input label="Street Address" id="street_address" name="street_address" autoComplete='street-address' type='text' required />
          <Input label="City" id="city" name="city" autoComplete='address-level2' type='text' required />
          <Input label="State" id="state" name="state" autoComplete='address-level1' type='text' required />
          <Input label="Postal Code" id="postal_code" name="postal_code" autoComplete='postal-code' type='text' required />
          <Input label="Country" id="country" name="country" autoComplete='country' type='text' required />
        </div>
      </fieldset>
      <fieldset>
        <p className="text-l font-semibold mb-2 text-slate-700">Card Details</p>
        <div className="flex flex-row flex-wrap gap-2">
          <Input label="Card Number" id="card_number" name="card_number" autoComplete='cc-number' type='text' required />
          <Input label="Expiry Date" id="expiry_date" name="expiry_date" autoComplete='cc-exp' type='text' required />
          <Input label="CVV" id="cvv" name="cvv" autoComplete='cc-csc' type='text' required />
        </div>
      </fieldset>
      <div className="mt-8">
        <div className="flex flex-row justify-end items-center gap-2">
          <h3 className="text-lg">Total</h3>
          <p>${getTotal(state, products)}</p>
          <Button type="submit" className="bg-green-400 ml-4">Checkout</Button>
        </div>
      </div>
    </form>
  )
}