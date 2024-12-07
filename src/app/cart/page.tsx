import Cart from "@/components/Cart";
import { openGraphBasicFields, openGraphImage } from "../shared-metadata";

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
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center flex-row gap-4 w-fit p-4 bg-white shadow-sm border border-slate-100 rounded">
        <Cart/>
      </div>
    </div>
  )
}