import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Header, Circle } from './styles';

export default function Float({
  show, title, render, onClose,
}) {
  return (
    <Modal show={show} onHide={onClose}>
      <Header>
        <Header.Buttons>
          <Circle size="25px" color="red" />
          <Circle size="25px" color="yellow" />
          <Circle size="25px" color="green" />
        </Header.Buttons>

        <Header.Title>{title}</Header.Title>
      </Header>

      {render}
    </Modal>
  );
}

Float.propTypes = {
  show: PropTypes.bool,
  title: PropTypes.string,
  render: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onClose: PropTypes.func,
};

Float.defaultProps = {
  show: false,
  title: 'No title',
  render: 'No element to render!',
  onClose: () => {},
};
