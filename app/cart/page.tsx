import Cart from "../components/Cart";
import { openGraphBasicFields, openGraphImage } from "../shared-metadata";
import CheckoutForm from "../components/CheckoutForm";

const title = 'eStore - Cart'
const description =  'Your shopping cart'

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
 * The user's cart page
 * @returns {JSX.Element}
 */
export default function CartPage(): JSX.Element {

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 w-fit items-center justify-center">
        <div className="flex flex-wrap justify-center flex-row gap-4 w-full p-4 bg-white shadow-sm border border-slate-100 rounded">
          <Cart/>
        </div>
        <div className="flex flex-wrap justify-center flex-row gap-4 w-full p-4 bg-white shadow-sm border border-slate-100 rounded">
          <CheckoutForm/>
        </div>
      </div>
    </div>
  )
}