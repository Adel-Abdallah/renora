import React from 'react';
import VChart from '../components/VChart';
import chartData from '../data/data';
function Invistations() {
  return (
    <VChart data={chartData.portfolioSummary}/>
  )
}

export default Invistations;