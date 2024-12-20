import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  /** A url link */
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export type Colors = 
'slate' |
'gray' |
'zinc' |
'zinc' |
'neutral' |
'stone' |
'red' |
'orange' |
'amber' |
'yellow' |
'lime' |
'green' |
'emerald' |
'teal' |
'cyan' |
'sky' |
'blue' |
'indigo' |
'violet' |
'purple' |
'fuchsia' |
'pink' |
'rose' 
