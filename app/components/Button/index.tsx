'use client'
import React from 'react';
import Link from "next/link";
import { ButtonProps } from "./type";

/**
 * Renders a button component
 * @param {ButtonProps} props - The props of the Button component
 * @returns 
 */
export default function Button({
  children,
  className = 'bg-slate-500 hover:bg-slate-700',
  href,
  ...restProps
}: ButtonProps): JSX.Element {
  className = `text-slate-100 font-bold py-2 px-4 rounded ${className ? className : ''}`

  if (href) {
    return (
      <Link href={href} {...restProps}>
        <div className={className}>{children}</div>
      </Link>
    )
  }

  return (
    <button {...restProps} className={className}>
      {children}
    </button>
  )
}