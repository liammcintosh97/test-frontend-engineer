import { ProductPage } from "./type"

export default async function Product({
  params,
}: ProductPage) {
  const slug = (await params).slug
  return <div>Product: {slug}</div>
}