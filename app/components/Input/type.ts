import { DetailedHTMLProps, InputHTMLAttributes } from "react";

/**
 * The input properties
 */
export type InputProps = {
  /** The label of the input */
  label: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;