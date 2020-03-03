import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.span`
  margin: 10px 10px 0px 10px;
  font-size: 20pt;
  cursor: pointer;
`;

const Section = ({ setType }) => (
  <Container>
    <Item onClick={() => setType("Image")}>{"이미지로 보기"}</Item>
    <Item onClick={() => setType("List")}>{"리스트로 보기"}</Item>
  </Container>
);
export default Section;
