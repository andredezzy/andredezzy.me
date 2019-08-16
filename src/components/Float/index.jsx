import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from './styles';

export default function Float({ show, render, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      {render}
    </Modal>
  );
}

Float.propTypes = {
  show: PropTypes.bool,
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClose: PropTypes.func,
};

Float.defaultProps = {
  show: false,
  render: 'No element to render!',
  onClose: () => {},
};
