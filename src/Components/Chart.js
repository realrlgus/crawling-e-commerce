import React from "react";
import styled from "styled-components";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  Line
} from "recharts";

const SResponsiveContainer = styled(ResponsiveContainer)`
  margin: 0 auto;
`;

const Chart = ({ width, height, data }) => (
  <SResponsiveContainer width="80%" height={300}>
    <LineChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="2 2" />
      <XAxis dataKey="crawlingTime" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="11번가"
        stroke="#ff7675"
        dot={{ stroke: "#ff7675", strokeWidth: 2 }}
      />
      <Line
        type="monotone"
        dataKey="옥션"
        stroke="#6c5ce7"
        dot={{ stroke: "#6c5ce7", strokeWidth: 2 }}
      />
      <Line
        type="monotone"
        dataKey="위메프"
        stroke="#636e72"
        dot={{ stroke: "#636e72", strokeWidth: 2 }}
      />
    </LineChart>
  </SResponsiveContainer>
);

export default Chart;
