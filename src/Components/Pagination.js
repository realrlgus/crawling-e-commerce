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

const SLink = styled.a`
  font-size: 20pt;
  border: 1px solid #74b9ff;
  padding: 10px 20px;
  margin-left: 10px;
  color: ${props => (props.page ? "#ffffff" : "#74b9ff")};
  background-color: ${props => (props.page ? "#74b9ff" : "#fffffff")};
`;

const Pagination = ({ pagination, pages, page }) => (
  <List>
    <Item>
      {pages &&
        pages.map((item, index) => (
          <SLink
            key={index}
            onClick={() => pagination(item)}
            page={page === item}
          >
            {item}
          </SLink>
        ))}
    </Item>
  </List>
);
export default Pagination;
