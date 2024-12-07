import React from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import NavLink from '../NavLink';
import AuthButton from '../AuthButton';

/**
 * NavBar component
 * @returns {JSX.Element}
 */
export default function NavBar(): JSX.Element{
  return (
    <div className='p-4 bg-teal-500 border-teal-600 border-b'>
      <ul className='flex flex-row gap-8 justify-between '>
        <div className='flex flex-row gap-8'>
          <NavLink href="/">
            <div className='flex flex-col items-center justify-center'>
              <FaHome color='#e2e8f0' size={28}/>
              <p className='text-slate-100 hover:text-white text-xs '>Home</p>
            </div>
          </NavLink>
        </div>
        <div className='flex flex-row gap-2'>
          <NavLink href="/cart">
            <div className='rounded-full bg-teal-600 p-2' >
              <FaShoppingCart color='#e2e8f0' size={20}/>
            </div>
          </NavLink>
          <AuthButton />
        </div>
      </ul>
    </div>
  );
};