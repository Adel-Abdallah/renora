import React from 'react';
import TotalCard from '../components/TotalCard';
import VChart from '../components/VChart';
import chartData from '../data/data';

function Source() {
  return (
    <div className='grid grid-cols-1 gap-16 mt-16' style={{ height: "auto" , width: "100%" , maxWidth:"100%" }}>
      <div>
        <VChart data={chartData.portfolioSummary} />
      </div>
      <div>
       <TotalCard/>
      </div>
    </div>
  )
}

export default Source;


