import React from 'react';
import PieChart from '../components/PieChart';
import Chart from '../components/Chart';
import chartData from '../data/data';

function Source() {
  return (
    <div className='w-screen fixed overflow-x-hidden place-content-center' style={{ height: '100vh' }}>
      <div className='flex flex-col mr-0.5 place-content-center'>
      <Chart data={chartData.assets} />
      <PieChart data={chartData.portfolioSummary} />
      </div>
    </div>
  )
}

export default Source;
