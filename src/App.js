import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PieChart from './components/PieChart';
import Chart from './components/Chart';

import Layout from './components/Layout';
import Main from './components/Main';
import chartData from './data/data';

import './index.css';

const App = () => {
  return (
  <Layout children={<Main />}
  secondChildren={
    <>
      <Chart data={chartData.assets} />
      <PieChart data={chartData.portfolioSummary}/>
    </>
  }
  
  />
  
  );
  };
  
  export default App;

