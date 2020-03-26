import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Chart from "../../Components/Chart";

const Container = styled.div``;

const Product = styled.div`
  display: flex;
  width: 80%;
  height: 400px;
  margin: 0 auto;
`;

const ProductImage = styled.div`
  background-image: url(${props => props.bgUrl});
  flex-basis: 30%;
  margin: auto 0;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.1s linear;
`;

const ProductDetail = styled.div`
  display: flex;
  flex-basis: 70%;
  flex-direction: column;
`;

const ProductTitle = styled.p`
  font-size: 18pt;
  font-weight: 700;
  padding-top: 30px;
`;

const ProductPrice = styled.div`
  font-size: 14pt;
  font-weight: 500;
  padding: 20px 0px;
  display: inline-block;
`;

const Store = styled.p`
  min-width: 120px;
  max-width: 120px;
  width: 120px;
  display: inline-block;
`;
const Price = styled.p`
  display: inline-block;
  min-width: 150px;
  max-width: 150px;
  width: 150px;
`;

const Link = styled.a`
  color: #3f4d8a;
  display: inline-block;
`;

const ChartTitle = styled.p`
  width: 80%;

  margin: 0 auto;
  font-size: 22pt;
  padding: 20px;
`;

const Sale = styled.div`
  display: inline-block;
  min-width: 95px;
  width: 95px;
  max-width: 95px;
  padding-left: 5px;
  color: ${props => props.color};
`;

const DetailPresenter = ({
  item,
  priceData,
  chartData,
  loading,
  salerData,
  error
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {console.log(error)}
      <Product>
        <ProductImage bgUrl={item.length > 0 ? item[0].imgUrl : ""} />
        <ProductDetail>
          <ProductTitle>
            {item.length > 0 ? item[0].productName : ""}
          </ProductTitle>
          {item.length > 0 && (
            <ProductPrice>
              <Store>KMUG </Store>
              <Price>
                {(item[0].price + item[0].fee)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </Price>
            </ProductPrice>
          )}

          {priceData.map(store =>
            Object.keys(store).map((col, idx) => (
              <ProductPrice key={idx}>
                <Store>{col} </Store>
                <Price>
                  {store[col]["price"]
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </Price>
                {((store[col]["price"] / item[0].price) * 100).toFixed(2) <
                  100 && (
                  <Sale color="#d63031">
                    {((store[col]["price"] / item[0].price) * 100).toFixed(2)}%
                  </Sale>
                )}

                {((store[col]["price"] / item[0].price) * 100).toFixed(2) >=
                  100 && (
                  <Sale color="#00cec9">
                    {((store[col]["price"] / item[0].price) * 100).toFixed(2)}%
                  </Sale>
                )}
                <Sale color="#a29bfe">
                  {(
                    (1 - store[col]["price"] / item[0].default_price) *
                    100
                  ).toFixed(2)}
                  %
                </Sale>

                <Link href={store[col]["productUrl"]} target="_blank">
                  바로가기
                </Link>
              </ProductPrice>
            ))
          )}
        </ProductDetail>
      </Product>
      {priceData && priceData.length > 0 && (
        <>
          <ChartTitle>쇼핑몰 일자별 판매 금액</ChartTitle>
          <Chart
            width={700}
            height={300}
            data={chartData}
            salerData={salerData}
          />
        </>
      )}
    </Container>
  );
export default DetailPresenter;
