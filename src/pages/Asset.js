import chartData from "../data/data"

export default function Assets() {
  const data = chartData.portfolioSummary
  return (
    <div className='w-full flex flex-col justify-center flex-wrap p-4 '>
      {/* <div className="sm:flex sm:items-center place-content-around">
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
      </div> */}
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
        <div className="mt-8" style={{ height: 'calc(100vh - 200px)', overflowY: 'auto' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  max-w-7xl my-2 mx-6" style={{ gridAutoFlow: 'dense' }}>
            {data.map((asset) => (
              <div key={asset.asset} className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                <h2 className="text-lg font-medium text-gray-900 mb-4">{asset.asset}</h2>
                <dl>
                  <div className="flex justify-between text-sm font-medium text-gray-500">
                    <dt>Amount</dt>
                    <dd>{asset.amount}</dd>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-500 mt-2">
                    <dt>Realized P&amp;L</dt>
                    <dd>{asset.realized}</dd>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-500 mt-2">
                    <dt>Unrealized P&amp;L</dt>
                    <dd>{asset.unrealized}</dd>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-500 mt-2">
                    <dt>Total P&amp;L</dt>
                    <dd>{asset.total}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}
