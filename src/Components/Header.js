import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  position: absolute;
  width: 100vw;
  height: 50px;
  top: 0;
  bottom: 0;
  background-color: rgba(20, 20, 20, 1);
  color: white;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 70px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${props => (props.current ? "#74b9ff" : "transparent")};
  transition: border-bottom 0.3s ease-in;
`;

const SLink = styled(Link)`
  display: flex;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">상품리스트</SLink>
      </Item>
      <Item current={pathname === "/statics"}>
        <SLink to="/statics">전체통계</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">검색</SLink>
      </Item>
    </List>
  </Header>
));
