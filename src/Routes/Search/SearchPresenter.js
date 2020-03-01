import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import Pagination from "../../Components/Pagination";
import Message from "../../Components/Message";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const HomePresenter = ({
  searchTerm,
  updateTerm,
  handleSubmit,
  items,
  priceData,
  error,
  loading
}) => (
  <Container>
    {console.log(error)}
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="제품명을 검색하세요."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
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
                test={console.log(priceData[item.keyword])}
                store_price={priceData[item.keyword]}
              />
            ))}
          </Section>
        )}
        {error && !items && <Message color="#000000" text={error}></Message>}
      </>
    )}
  </Container>
);

export default HomePresenter;
