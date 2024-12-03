import React from 'react';
import Link from 'next/link';
import { NavLinkProps } from './type';

/**
 * NavBar component
 * @module NavBar
 * @returns {JSX.Element}
 */
export default function NavBar(): JSX.Element{
  return (
    <nav className='p-4 bg-slate-100'>
      <ul className='flex flex-row gap-8 justify-between'>
        <div className='flex flex-row gap-8'>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
        </div>
          <NavLink href="/cart">Cart</NavLink>
      </ul>
    </nav>
  );
};

/**
 * The NavLink component
 * @memberof module:NavBar
 * @param {NavLinkProps} props - The props of the NavLink component
 * @returns
 */
function NavLink({children, ...restProps} : NavLinkProps){
  return (
    <li>
      <Link {...restProps} className='text-slate-700'>{children}</Link>
    </li>
  )
}