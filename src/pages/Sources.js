import React from 'react';
import PieChart from '../components/PieChart';
import Chart from '../components/Chart';
import chartData from '../data/data';

function Source() {
  return (
    <div className='w-screen fixed overflow-x-hidden place-content-center' style={{ height: '100vh' }}>
      <div className='flex flex-col mr-0.5 place-content-center'>
        <div className='mr-0.5 mb-8'>
      <Chart data={chartData.assets} />
        </div>
        <div className='mr-0.5 mt-8'>
      <PieChart data={chartData.portfolioSummary} />
        </div>
      </div>
    </div>
  )
}

export default Source;
