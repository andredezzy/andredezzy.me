import React from 'react';
import PropTypes from 'prop-types';

import { Container, Spacing } from './styles';

export default function Body({ children }) {
  return (
    <Container>
      {children}

      <Spacing>
        <span>.</span>
      </Spacing>
    </Container>
  );
}

Body.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
