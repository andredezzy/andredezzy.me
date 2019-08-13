import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Body({ children }) {
  return (
    <Container>
      {children}
      <span>.</span>
    </Container>
  );
}

Body.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
