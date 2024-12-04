'use client'
import { useEffect } from "react"
import { ErrorProps } from "./type"


/**
 * The GlobalError component handles errors in the root layout or template
 * @param {ErrorProps} props - The props to pass to the component
 * @returns {JSX.Element}
 */
export default function GlobalError({
  error,
  reset,
}: ErrorProps): JSX.Element {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}