import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

export type NavLinkProps = {
  children: ReactNode;
} & LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;