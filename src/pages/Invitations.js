import React from 'react';
import VChart from '../components/VChart';
import chartData from '../data/data';
function Invitations() {
  return (
    <VChart data={chartData.portfolioSummary}/>
  )
}

export default Invitations;