import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Grid = styled.div`
  margin: 25px auto 0px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 400px);
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
`;

const Section = ({ children }) => (
  <Container>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
