import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import List from "../../Components/List";
import ListSection from "../../Components/ListSection";
import ViewType from "../../Components/ViewType";
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
  border-bottom: 3px solid #b2bec3;

  width: 100%;
`;

const HomePresenter = ({
  searchTerm,
  updateTerm,
  handleSubmit,
  items,
  priceData,
  error,
  loading,
  type,
  setType
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="제품명 혹은 파트번호를 입력하세요."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {items && items.length > 0 && type === "Image" && (
          <>
            <ViewType setType={setType} />
            <Section>
              {items.map(item => (
                <Poster
                  key={item.idx}
                  id={item.idx}
                  title={item.productName}
                  bgUrl={item.imgUrl}
                  defaultprice={item.default_price}
                  price={item.price}
                  keyword={item.keyword}
                  store_price={priceData[item.keyword]}
                />
              ))}
            </Section>
          </>
        )}
        {items && items.length > 0 && type === "List" && (
          <ListSection>
            <ViewType setType={setType} />
            {items.map(item => (
              <List
                key={item.idx}
                id={item.idx}
                title={item.productName}
                bgUrl={item.imgUrl}
                defaultprice={item.default_price}
                price={item.price}
                keyword={item.keyword}
                store_price={priceData[item.keyword]}
              />
            ))}
          </ListSection>
        )}
        {error && !items && <Message color="#000000" text={error}></Message>}
      </>
    )}
  </Container>
);

export default HomePresenter;
