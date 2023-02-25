import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ data }) => {
  const transformedData = data.map((d) => ({
    ...d,
    name: d.symbol,
  }));

  return (
    <ResponsiveContainer width="95%" height={240}>
      <LineChart
        width={600}
        height={300}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        padding={{ top: 0, right: 0, left: 0, bottom: 0 }}
        data={transformedData}
      >
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 50, backgroundColor: "#ccc" }} />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "40px",
          }}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          strokeWidth={1}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Chart;
