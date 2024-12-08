import { ButtonProps } from "../Button/type";

/** 
 * The properties of the AddToCartButton
 */
export type AddToCartButtonProps = {
  /** The id of the product to add */
  pid: number;
} & Omit<ButtonProps, 'children'>