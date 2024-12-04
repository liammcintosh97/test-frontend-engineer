import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  /** The text to display on the button */
  text: string;
  /** The color of the button */
  color: Colors;
  /** The size of the button */
} & ButtonHTMLAttributes<HTMLButtonElement>;

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
