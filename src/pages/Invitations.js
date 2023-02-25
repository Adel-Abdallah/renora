import React from "react";
import VChart from "../components/VChart";
import Chart from '../components/Chart';
import chartData from "../data/data";
function Invitations() {
  return (
    <div
      className="grid grid-cols-1 gap-16 mt-16"
      style={{ height: "auto", width: "100%", maxWidth: "100%" }}
    >
      <div>
        <VChart data={chartData.portfolioSummary} />
      </div>
      <div>
      <Chart data={chartData.assets} />
      </div>
    </div>
  );
}

export default Invitations;
