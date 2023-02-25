import { useState, useEffect } from "react";
import chartData from "../data/data";

export default function Assets() {
  const [isMobile, setIsMobile] = useState(false);
  const data = chartData.portfolioSummary;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center flex-wrap mx-2 ">
      {!isMobile && (
        <div className="overflow-x-auto m-2 p-2">
          <table className="mt-8 w-full sm:px-2">
            <thead>
              <tr className="text-left">
                <th className="text-left px-2 py-2 whitespace-nowrap text-lg font-medium text-gray-900">
                  Asset
                </th>
                <th className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                  Amount
                </th>
                <th className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                  Realized P&amp;L
                </th>
                <th className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                  Unrealized P&amp;L
                </th>
                <th className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                  Total P&amp;L
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-8">
              {data.map((asset) => (
                <tr
                  key={asset.asset}
                  className="bg-white p-4 rounded-lg shadow-lg card"
                  style={{ height: "80px" }}
                >
                  <td
                    className="px-2 py-2 whitespace-nowrap font-medium text-gray-900"
                    style={{ width: "60px" }}
                  >
                    <div
                      className="flex items-center"
                      style={{ width: "auto" }}
                    >
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-2 bg-slate-200">
                        <img
                          className="w-full h-full object-cover bg-slate-200"
                          src={asset.logo}
                          alt="logo"
                        />
                      </div>
                      <span className="asset-text">{asset.asset}</span>
                      <span className="logo-only sr-only">{asset.asset}</span>
                    </div>
                  </td>
                  <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                    {asset.amount}
                  </td>
                  <td className=" px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                    {asset.realized}
                  </td>
                  <td className=" px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                    {asset.unrealized}
                  </td>
                  <td className=" px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-500">
                    {asset.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isMobile && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {data.map((asset) => (
            <div
              key={asset.asset}
              className="bg-white p-4 rounded-lg shadow-lg card"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-2 bg-slate-200">
                  <img
                    className="w-full h-full object-cover bg-slate-200"
                    src={asset.logo}
                    alt="logo"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{asset.asset}</p>
                  <p className="text-sm text-gray-500">
                    <b>Amount:</b>
                    {asset.amount}
                  </p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-gray-500">
                    Realized P&amp;L
                  </p>
                  <p className="text-sm text-gray-500">{asset.realized}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-gray-500">
                    Unrealized P&amp;L
                  </p>
                  <p className="text-sm text-gray-500">{asset.unrealized}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-gray-500">
                    Total P&amp;L
                  </p>
                  <p className="text-sm text-gray-500">{asset.total}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
