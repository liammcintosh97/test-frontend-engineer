/** The properties of the Product page*/
export type ProductPage = {
  params: Promise<Params>
}
/** The Param object of the route */
type Params = {
  /** The slug of the url */
  slug: string
}