import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  color: black;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const Title = styled.div`
  text-align: center;
  max-width: 360px;
  font-size: 18pt;
  margin: 0 auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 700;
`;

const Keyword = styled.div`
  max-width: 360px;
  margin: 15px auto;
  font-size: 16pt;
`;

const Price = styled.div`
  max-width: 360px;
  margin: 10px auto;
  font-size: 15pt;
`;

const Store = styled.div`
  width: 80px;
  min-width: 80px;
  max-width: 80px;
  display: inline-block;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const SLink = styled(Link)`
  display: block;
`;

const Poster = ({ id, bgUrl, title, price, keyword, store_price }) => (
  <Link to={`/items/${id}`}>
    <Container>
      <Image bgUrl={bgUrl}></Image>
      <Title>{title}</Title>
      <Keyword>{keyword}</Keyword>
      <Price>
        <Store>KMUG : </Store>
        <Bold>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</Bold>
      </Price>
      {store_price &&
        Object.keys(store_price).map((item, index) => (
          <Price key={index}>
            <Store>{item} : </Store>
            <Bold>
              {store_price[item]
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              원
            </Bold>
          </Price>
        ))}
    </Container>
  </Link>
);

export default Poster;
