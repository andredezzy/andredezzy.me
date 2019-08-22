import React from 'react';
import PropTypes from 'prop-types';

import { FaStar } from 'react-icons/fa';

import { Container } from './styles';

export default function Star({ amount, style }) {
  return (
    <Container style={style}>
      <FaStar size={13} />
      <span>{amount}</span>
    </Container>
  );
}

Star.propTypes = {
  amount: PropTypes.number.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

Star.defaultProps = {
  style: {},
};
