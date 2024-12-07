import { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

/**
 * The NavElement interface defines the props for the NavLink component
*/
export type NavElementProps = {
  type: 'home' | 'categories'
} & LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;