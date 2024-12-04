'use client' 
import { useEffect } from 'react'
import { ErrorProps } from './type'
/**
 * The Error component handles unexpected runtime errors and displays fallback UI
 * @param {ErrorProps} props - The props to pass to the component
 * @returns {JSX.Element}
 */
export default function Error({
  error,
  reset,
}: ErrorProps): JSX.Element {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}