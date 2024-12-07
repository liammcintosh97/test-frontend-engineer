import { InputProps } from "./type";

export default function Input({label, id, ...restProps}: InputProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <label className='text-sm text-slate-500' htmlFor={id}>{label}</label>
      <input className='border-slate-300 border-b-2 pb-2 focus:border-teal-400 focus:outline-none' id={id} {...restProps}/>
    </div>
  )
}