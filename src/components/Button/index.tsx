import Link from "next/link";
import { ButtonProps } from "./type";

/**
 * Renders a button component
 * @param {ButtonProps} props - The props of the Button component
 * @returns 
 */
export default function Button({color = 'slate', children, className, href, ...restProps}: ButtonProps): JSX.Element {
  let _className = `bg-${color}-500 hover:bg-${color}-700 text-slate-100 font-bold py-2 px-4 rounded`
  if (className) {
    _className += ' ' + className
  }

  if (href) {
    return (
      <Link href={href} {...restProps}>
        <div className={_className}>{children}</div>
      </Link>
    )
  }

  return (
    <button {...restProps} className={_className}>
      {children}
    </button>
  )
}