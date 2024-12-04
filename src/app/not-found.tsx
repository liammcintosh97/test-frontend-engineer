import Link from 'next/link'
import React from 'react'

/**
 * Renders UI when the notFound function is thrown within a route segment
 * @returns {JSX.Element}
 */
export default function NotFound(): JSX.Element {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}