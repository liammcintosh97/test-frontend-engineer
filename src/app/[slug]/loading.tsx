/**
 * The loading skeleton for the product page
 * @returns {JSX.Element}
 */
export default function Loading(): JSX.Element {
  return (
    <div role="status" className="flex justify-center animate-pulse">
      <div className="flex flex-wrap justify-center flex-row gap-8 w-fit p-4 bg-white shadow-sm border border-slate-100 rounded">
        <div className=" p-4 bg-white flex justify-center align-middle">
          <div className="h-[300px] w-[400px] bg-gray-200 rounded dark:bg-gray-300 mb-4"/>
        </div>
        <div className="p-4 flex flex-col max-w-[500px] justify-between">
          <div className=" p-4 flex flex-col">
            <div>
              <div className="h-12 w-96 bg-gray-200 rounded dark:bg-gray-300 "/>
              <div className="mt-4 flex flex-row gap-4">
                <div className="h-8 w-48 bg-gray-200 rounded dark:bg-gray-300 "/>
                <div className="h-8 w-48 bg-gray-200 rounded dark:bg-gray-300 "/>
              </div>
            </div>
            <div className="flex flex-row gap-4 content-center items-center mt-4">
              <div className="h-12 w-96 bg-gray-200 rounded dark:bg-gray-300 "/>
              <div className="flex flex-row gap-1">
              <div className="h-6 w-24 bg-gray-200 rounded dark:bg-gray-300 "/>
              <div className="h-6 w-24 bg-gray-200 rounded dark:bg-gray-300 "/>
              </div>
            </div>
            <div className="h-36 w-full bg-gray-200 rounded dark:bg-gray-300 mt-4"/>
          </div>
        </div>
      </div>
    </div>
  )
}