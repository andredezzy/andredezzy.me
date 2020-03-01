import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "styled-components";

import { Container } from "./styles";

export default function Body({ children }) {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      {children}
      <span className="debug">.</span>
    </Container>
  );
}

Body.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
