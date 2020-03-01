import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "styled-components";

import { Container } from "./styles";

export default function Card({
  id,
  title,
  fontSize,
  opacity,
  centered,
  onClick
}) {
  const theme = useContext(ThemeContext);

  return (
    <Container
      theme={theme}
      fontSize={fontSize}
      opacity={opacity}
      centered={centered}
      onClick={() => onClick(id, title)}
    >
      <span>{title}</span>
    </Container>
  );
}

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  opacity: PropTypes.number,
  centered: PropTypes.bool,
  onClick: PropTypes.func
};

Card.defaultProps = {
  id: null,
  fontSize: null,
  opacity: 1,
  centered: false,
  onClick: () => {}
};
