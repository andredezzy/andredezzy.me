import React from 'react';
import PropTypes from 'prop-types';

import { Container, Circle } from './styles';

export default function Language({ label, color }) {
  return (
    <Container>
      <Circle size="12px" color={color} />
      <span>{label}</span>
    </Container>
  );
}

Language.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
