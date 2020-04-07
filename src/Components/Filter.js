import React from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 200px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;


const Section = ({ setFilter, category }) => (
  <Select onChange={e => setFilter(e.target.value)}>
    <option value="null">전체</option>
    {category &&
      category.map((item, index) => (
        <option value={item.category} key={index}>
          {item.category}
        </option>
      ))}
  </Select>
);
export default Section;
