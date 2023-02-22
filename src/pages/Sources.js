import React from 'react';
import PieChart from '../components/PieChart';
import Chart from '../components/Chart';
import chartData from '../data/data';
function Source() {
  return(
    <div className='w-screen fixed overflow-x-hidden' style={{ height: '100vh' }}>
      <Chart data={chartData.assets}/>
      <PieChart data={chartData.portfolioSummary}/>
    </div>
  )
}

export default Source;
