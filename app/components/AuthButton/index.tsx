"use client";
import { useAuth } from "../../providers/AuthProvider";
import NavLink from "../NavLink";
import { FiLogIn } from "react-icons/fi";

export default function AuthButton(): JSX.Element {
  const {token, logout} = useAuth()

  const onClick = async() => {
    try {
      logout()
    } catch (error) {
      console.error(error)
    }
  }

  return token
    ? <li className='content-center'>
        <button className='flex gap-2 rounded-full bg-teal-600 p-2 items-center' onClick={onClick}>
          <div className="rotate-[-180deg]"><FiLogIn color='#e2e8f0' size={20}/></div>
          <p className="text-slate-200 text-xs pr-2">Log out</p>
        </button>
      </li>
    : <NavLink href="/login">
      <div className='flex gap-2 rounded-full bg-teal-600 p-2 items-center' >
        <FiLogIn color='#e2e8f0' size={20}/>
        <p className="text-slate-200 text-xs pr-2">Log in</p>
      </div>
    </NavLink>
}