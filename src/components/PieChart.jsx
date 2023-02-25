import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data }) => {
  const transformedData = data.map((d) => ({
    id: d.symbol,
    label: d.symbol,
    value: d.total,
  }));

  return (
    <div className="grid justify-center align-middle border-solid border-2 rounded-lg p-4">
    <div style={{width:"380px" , height:"280px", margin: "auto"}}>
      <ResponsivePie
       data={transformedData}
       fit={true}
        margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
        padding={{ top: 0, right: 0, left: 0, bottom: 0 }} 
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        enableRadialLabels={false}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        enableSlicesLabels={false}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
    </div>
  );
};

export default PieChart;
