import React from 'react';
import PropTypes from 'prop-types';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from 'victory';

const VChart = ({ data }) => {
  return (
    <div className='grid justify-center align-middle bg-white p-4 rounded-lg shadow-lg card'>
    <VictoryChart
      domainPadding={{ x: 20 }}
      height={200}
      padding={{ left: 50, right: 10, top: 30, bottom: 30 }}
    >
      <VictoryAxis
        tickValues={data.map((item) => item.asset)}
        style={{
          axis: { stroke: '#ccc' },
          ticks: { stroke: '#ccc', size: 5 },
          tickLabels: { fontSize: 8, padding: 5 },
        }}
      />
      <VictoryAxis
        dependentAxis
        style={{
          axis: { stroke: '#ccc' },
          ticks: { stroke: '#ccc', size: 5 },
          tickLabels: { fontSize: 8, padding: 5 },
        }}
      />
      <VictoryBar
        data={data}
        x="asset"
        y="total"
        style={{
          data: { fill: '#8884d8' },
          labels: { fontSize: 8, fill: '#fff' },
        }}
        labelComponent={<VictoryTooltip />}
      />
    </VictoryChart>
    </div>
  );
};

VChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VChart;
