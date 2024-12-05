import { DetailedHTMLProps, HTMLAttributes } from "react"

/**
 * The properties of the PriceTag component
 */
export type PriceTagProps = {
  /** The price to render in the tag */
  price: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>