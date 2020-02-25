import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div``;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 180px;
`;

const Title = styled.span``;

const Poster = ({ bgUrl, title }) => (
  <ImageContainer>
    <Image bgUrl={bgUrl}></Image>
    <Title>{title}</Title>
  </ImageContainer>
);

export default Poster;
