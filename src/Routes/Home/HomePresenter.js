import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Pagination from "../../Components/Pagination";

const Container = styled.div``;
const Item = styled.div``;
const HomePresenter = ({
  items,
  priceData,
  loading,
  pagination,
  pages,
  page
}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {items && items.length > 0 && (
        <Section>
          {items.map(item => (
            <Poster
              key={item.idx}
              id={item.idx}
              title={item.productName}
              bgUrl={item.imgUrl}
              price={item.price}
              keyword={item.keyword}
              store_price={priceData[item.keyword]}
            />
          ))}
        </Section>
      )}
      <Pagination pagination={pagination} pages={pages} page={page} />
    </Container>
  );

export default HomePresenter;
