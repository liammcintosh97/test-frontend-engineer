import { PriceTagProps } from "./type";

/**
 * Renders a price tag component
 * @param {PriceTagProps} props - The properties of the component 
 * @returns {JSX.Element}
 */
export default function PriceTag({price, className, ...restProps}: PriceTagProps): JSX.Element {
  let _className = `flex flex-row`
  if (className) {
    _className += ' ' + className
  }

  return (
    <div {...restProps} className={_className}>
      <div className="bg-red-600 p-2 w-fit">
        <p className="text-slate-100 font-semibold">${price}</p>
      </div>
      <div className="w-0 h-0
        border-t-[20px] border-t-transparent
        border-l-[10px] border-l-red-600
        border-b-[20px] border-b-transparent">
      </div>
    </div>
  )
}