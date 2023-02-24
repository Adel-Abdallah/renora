import chartData from "../data/data";

export default function Assets() {
  const data = chartData.portfolioSummary;

  return (
    <div className="w-full flex flex-col justify-center flex-wrap px-4 mx-2 ">
      <table className="mt-8 w-full">
        <thead>
          <tr>
            <th className="text-left px-3 py-2 whitespace-nowrap text-lg font-medium text-gray-900">
              Asset
            </th>
            <th className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
              Amount
            </th>
            <th className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
              Realized P&amp;L
            </th>
            <th className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
              Unrealized P&amp;L
            </th>
            <th className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
              Total P&amp;L
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-gray-200 divide-y-4">
          {data.map((asset) => (
            <tr
              key={asset.asset}
              className="bg-white shadow-md border border-gray-200 my-4 space-y-16 rounded"
              style={{ height: "80px" }}
            >
              <td className="px-3 py-2 whitespace-nowrap font-medium text-gray-900 bg-slate-50 shadow-indigo-500/40">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-2 bg-slate-200">
                    <img
                      className="w-full h-full object-cover bg-slate-200"
                      src={asset.logo}
                      alt="logo"
                    />
                  </div>
                  <span className="">{asset.asset}</span>
                </div>
              </td>
              <td className="px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                {asset.amount}
              </td>
              <td className="card-like px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                {asset.realized}
              </td>
              <td className="card-like px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                {asset.unrealized}
              </td>
              <td className="card-like px-3 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                {asset.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
