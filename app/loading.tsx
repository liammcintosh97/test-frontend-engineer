/**
 * The loading skeleton for the products page
 * @returns {JSX.Element}
 */
export default function Loading(): JSX.Element {
  return (
    <div role="status" className="flex flex-col justify-center items-center animate-pulse">
      <div className="h-16 w-96 bg-gray-200 rounded dark:bg-gray-300 mb-4"/>
      <div className="flex">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <li className="min-[350px]:w-[300px] max-[350px]:max-w-[300px] h-[500px] bg-gray-200 rounded dark:bg-gray-300 mb-4"/>
          <li className="min-[350px]:w-[300px] max-[350px]:max-w-[300px] h-[500px] bg-gray-200 rounded dark:bg-gray-300 mb-4"/>
          <li className="min-[350px]:w-[300px] max-[350px]:max-w-[300px] h-[500px] bg-gray-200 rounded dark:bg-gray-300 mb-4"/>
          <li className="min-[350px]:w-[300px] max-[350px]:max-w-[300px] h-[500px] bg-gray-200 rounded dark:bg-gray-300 mb-4"/>
        </ul>
      </div>
    </div>
  )
}