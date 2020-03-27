import React from "react";
import styled from "styled-components";
import { IoIosListBox, IoIosImages } from "react-icons/io";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ListBox = styled(IoIosListBox)`
  margin: 0px 0px 0px 20px;
  cursor: pointer;
`;
const ImageBox = styled(IoIosImages)`
  margin: 0px 20px;
  cursor: pointer;
`;

const Section = ({ setType }) => (
  <Container>
    <ListBox onClick={() => setType("List")} size="50">
      {"리스트로 보기"}
    </ListBox>
    <ImageBox onClick={() => setType("Image")} size="50">
      {"이미지로 보기"}
    </ImageBox>
  </Container>
);
export default Section;
