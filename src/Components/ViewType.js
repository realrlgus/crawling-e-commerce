import React from "react";
import styled from "styled-components";
import { IoIosListBox, IoIosImages } from "react-icons/io";

const ListBox = styled(IoIosListBox)`
  margin: 0px 0px 0px 20px;
  cursor: pointer;
`;
const ImageBox = styled(IoIosImages)`
  margin: 0px 20px;
  cursor: pointer;
`;

const Section = ({ setType }) => (
  <>
    <ListBox onClick={() => setType("List")} size="50">
      {"리스트로 보기"}
    </ListBox>
    <ImageBox onClick={() => setType("Image")} size="50">
      {"이미지로 보기"}
    </ImageBox>
  </>
);
export default Section;
