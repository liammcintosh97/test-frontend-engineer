import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * The NavLinkProps interface defines the props for the NavLink component
*/
export type NavLinkProps = {
  /** The children to render within the link */
  children: ReactNode;
} & LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * The NavElement interface defines the props for the NavLink component
*/
export type NavElementProps = {
  type: 'home' | 'categories'
} & LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;