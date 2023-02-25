import React from 'react';
import PieChart from '../components/PieChart';
import Chart from '../components/Chart';
import chartData from '../data/data';

function Source() {
  return (
    <div className='grid grid-cols-1 gap-16 mt-16' style={{ height: "auto" , width: "100%" , maxWidth:"100%" }}>
      <div>
        <Chart data={chartData.assets} />
      </div>
      <div>
        <PieChart data={chartData.portfolioSummary} />
      </div>
    </div>
  )
}

export default Source;

