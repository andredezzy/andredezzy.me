import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({
  title, fontSize, opacity, centered,
}) {
  return (
    <Container fontSize={fontSize} opacity={opacity} centered={centered}>
      <span>{title}</span>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  opacity: PropTypes.number,
  centered: PropTypes.bool,
};

Card.defaultProps = {
  fontSize: null,
  opacity: 1,
  centered: false,
};
