import chartData from "../data/data"

export default function Assets() {
  const data = chartData.portfolioSummary
  return (
    <div>
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Assets</h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Synce
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                 {""}
                  </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Amont
                  </th>
                  <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  Realized P&L
                  </th>
                  <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  Unrealized P&L
                  </th>
                  <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  Total P&L
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((asset) => (
                  <tr key={asset.asset}>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{asset.asset}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{asset.amount}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{asset.realized}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{asset.unrealized}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{asset.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}



