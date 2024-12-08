import Link from "next/link";
import { NavLinkProps } from "./type";

/**
 * The NavLink component
 * @param {NavLinkProps} props - The props of the NavLink component
 * @returns {JSX.Element}
 */
export default function NavLink({children, ...restProps} : NavLinkProps): JSX.Element{
  return (
    <li className='content-center'>
      <Link {...restProps}>{children}</Link>
    </li>
  )
}