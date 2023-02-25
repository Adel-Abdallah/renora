import chartData from "../data/data";

const totalAmount = chartData.portfolioSummary.reduce((acc, asset) => acc + asset.amount, 0);
const totalUnrealized = chartData.portfolioSummary.reduce((acc, asset) => acc + asset.unrealized, 0);
const total = totalAmount + totalUnrealized;

const TotalCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Portfolio Summary</h2>
      <p>Total amount: {totalAmount}</p>
      <p>Total unrealized: {totalUnrealized}</p>
      <p>Total: {total}</p>
    </div>
  );
};

export default TotalCard;
