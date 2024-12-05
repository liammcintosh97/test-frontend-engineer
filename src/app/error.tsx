'use client' 
import { useEffect } from 'react'
import { ErrorProps } from './type'
import Button from '@/components/Button'
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
    <div className='flex w-full justify-center'>
      <div className='flex flex-col mt-8 items-center '>
        <h1 className='font-bold text-3xl text-red-500 text-center'>Something went wrong!</h1>
        <p className='text-red-500'>{error.message}</p>
        <Button
          className='bg-red-500 hover:bg-red-700 mt-4'
          onClick={() => reset()}
        >
          Try again
        </Button>
      </div>
    </div>
  )
}