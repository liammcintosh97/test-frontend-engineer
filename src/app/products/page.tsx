import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link href="/products/1">1</Link>
        </li>
        <li>
          <Link href="/products/2">2</Link>
        </li>
        <li>
          <Link href="/products/3">3</Link>
        </li>
      </ul>
    </div>
  )
}