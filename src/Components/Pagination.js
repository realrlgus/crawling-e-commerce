import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.ul`
  margin: 20px auto;
  text-align: center;
`;

const Item = styled.li`
  display: inline;
`;

const SLink = styled(Link)`
  color: black;
  font-size: 20pt;
  border: 1px solid #74b9ff;
  padding: 10px;
  color: black;
`;

const Pagination = ({ count }) => (
  <List>
    <Item>
      <SLink to="/?page=2">132</SLink>
    </Item>
    <Item>
      <SLink to="/?page=2">132</SLink>
    </Item>
    <Item>
      <SLink to="/?page=3">132</SLink>
    </Item>
    <Item>
      <SLink to="/?page=4">132</SLink>
    </Item>
  </List>
);

export default Pagination;
