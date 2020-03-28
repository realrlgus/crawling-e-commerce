import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import List from "../../Components/List";
import ListSection from "../../Components/ListSection";
import ViewType from "../../Components/ViewType";
import Poster from "../../Components/Poster";
import Filter from "../../Components/Filter";
import Pagination from "../../Components/Pagination";

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Item = styled.div``;
const HomePresenter = ({
  items,
  priceData,
  loading,
  pagination,
  pages,
  page,
  type,
  category,
  setType,
  setFilter
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {items && items.length > 0 && (
        <Header>
          <Filter setFilter={setFilter} category={category} />
          <ViewType setType={setType} />
        </Header>
      )}

      {items && items.length > 0 && type === "Image" && (
        <Section>
          {items.map(item => (
            <Poster
              key={item.idx}
              id={item.idx}
              title={item.productName}
              bgUrl={item.imgUrl}
              price={item.price}
              defaultprice={item.default_price}
              keyword={item.keyword}
              store_price={priceData[item.keyword]}
            />
          ))}
        </Section>
      )}
      {items && items.length > 0 && type === "List" && (
        <ListSection>
          {items.map(item => (
            <List
              key={item.idx}
              id={item.idx}
              title={item.productName}
              bgUrl={item.imgUrl}
              price={item.price}
              defaultprice={item.default_price}
              keyword={item.keyword}
              store_price={priceData[item.keyword]}
            />
          ))}
        </ListSection>
      )}
    </Container>
  );

export default HomePresenter;
