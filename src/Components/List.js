import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const ImageColumn = styled.div`
  flex-basis: 10%;
`;

const TitleColumn = styled.div`
  flex-basis: 65%;
`;

const PriceColumn = styled.div`
  flex-basis: 25%;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Title = styled.div`
  text-align: center;
  max-width: 550px;
  font-size: 18pt;
  margin: 0 auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 700;
`;

const Keyword = styled.div`
  max-width: 550px;
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
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Poster = ({ id, bgUrl, title, price, keyword, store_price }) => (
  <SLink to={`/items/${id}`}>
    <Container>
      <ImageColumn>
        <Image src={bgUrl}></Image>
      </ImageColumn>
      <TitleColumn>
        <Title>{title}</Title>
        <Keyword>{keyword}</Keyword>
      </TitleColumn>
      <PriceColumn>
        <Price>
          <Store>KMUG : </Store>
          <Bold>
            {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </Bold>
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
      </PriceColumn>
    </Container>
  </SLink>
);

export default Poster;
