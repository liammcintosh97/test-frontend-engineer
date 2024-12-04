import { ButtonProps } from "./type";

/**
 * Renders a button component
 * @param {ButtonProps} props - The props of the Button component
 * @returns 
 */
export default function Button({color = 'slate', text, className, ...restProps}: ButtonProps): JSX.Element {
  let _className = `bg-${color}-500 hover:bg-${color}-700 text-slate-100 font-bold py-2 px-4 rounded`
  if (className) {
    _className += ' ' + className
  }
  console.log(className)
  console.log(_className)

  return (
    <button {...restProps} className={_className}>
      {text}
    </button>
  )
}