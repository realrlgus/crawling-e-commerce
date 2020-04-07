import React from "react";
import styled from "styled-components";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line
} from "recharts";

const SResponsiveContainer = styled(ResponsiveContainer)`
  margin: 0 auto;
`;

const color = [
  "#55efc4",
  "#00cec9",
  "#74b9ff",
  "#a29bfe",
  "#fab1a0",
  "#ff7675",
  "#fd79a8"
];

const Chart = ({ width, height, data, salerData }) => (
  <SResponsiveContainer width="80%" height={300}>
    <LineChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="crawlingTime" />
      <YAxis />
      <Tooltip />
      <Legend />
      {salerData.length > 0 &&
        salerData.map((item, index) => (
          <Line
            type="monotone"
            dataKey={item}
            key={index}
            stroke={color[index]}
            dot={{ stroke: color[index], strokeWidth: 2 }}
          />
        ))}
    </LineChart>
  </SResponsiveContainer>
);

export default Chart;
