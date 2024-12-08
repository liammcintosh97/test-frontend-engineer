import { InputProps } from "./type";

/**
 * A text input component with a label
 * @param {InputProps} props - The input properties
 * @returns {JSX.Element}
 */
export default function Input({label, id, required, ...restProps}: InputProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <div>
        <label className='text-sm text-slate-500' htmlFor={id}>{label}</label>
        {required && <span className='text-red-500 ml-2'>*</span>}
      </div>
      <input required={required} className='border-slate-300 border-b-2 pb-2 focus:border-teal-400 focus:outline-none' id={id} {...restProps}/>
    </div>
  )
}