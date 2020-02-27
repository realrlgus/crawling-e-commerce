import React from "react";
import styled from "styled-components";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer,
  Bar
} from "recharts";

const SResponsiveContainer = styled(ResponsiveContainer)`
  margin: 0 auto;
`;

const Chart = ({ width, height, data }) => (
  <SResponsiveContainer width="80%" height={300}>
    <BarChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="crawlingTime" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#88a84d">
        <Label dataKey="crawlingSite"></Label>
      </Bar>

      {/* {data.map(item =>
        item.priceObj.map((obj, idx) => (
          <Bar key={idx} dataKey={obj.price} fill="#88a84d" />
        ))
      )} */}
    </BarChart>
  </SResponsiveContainer>
);

export default Chart;
