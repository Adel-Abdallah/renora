import React from 'react';
import PieChart from '../components/PieChart';
import Chart from '../components/Chart';
import chartData from '../data/data';

function Source() {
  return (
    <div className='w-full flex flex-col justify-center '>
      
    <Chart data={chartData.assets} />
    <PieChart data={chartData.portfolioSummary} />
    </div>
  )
}

export default Source;
