import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0px auto;
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = ({ children }) => (
  <Container>
    <Flex>{children}</Flex>
  </Container>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
