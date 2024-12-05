import Button from '@/components/Button'
import React from 'react'

/**
 * Renders UI when the notFound function is thrown within a route segment
 * @returns {JSX.Element}
 */
export default function NotFound(): JSX.Element {
  return (
    <div className='flex w-full justify-center'>
      <div className='flex text-slate-500 flex-col mt-8 items-center '>
        <h1 className='font-bold text-slate-500 text-3xl text-center'> 404 Not Found</h1>
        <p>{"Couldn't find the requested resource"}</p>
        <Button
          href="/"
          className='bg-cyan-500 hover:bg-cyan-700 mt-4'
        >
          Return Home
        </Button>
      </div>
    </div>
  )
}