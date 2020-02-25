import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";

const Container = styled.div``;
const Item = styled.div``;
const HomePresenter = ({ items, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {console.log(items)}
      {items && items.length > 0 && (
        <Section title="상품리스트">
          {items.map(item => (
            <Poster key={item.idx} title={item.productName} />
          ))}
        </Section>
      )}
    </Container>
  );

export default HomePresenter;
