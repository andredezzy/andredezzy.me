import React from 'react';
import PropTypes from 'prop-types';

import {
  Modal, Header, Circle, Separator,
} from './styles';

export default function Float({
  show, title, render, onClose,
}) {
  return (
    <Modal show={show} onHide={onClose}>
      <Header>
        <Header.Buttons>
          <Circle size="25px" color="#FF0000" onClick={onClose} />
          <Circle size="25px" color="#FFBA00" onClick={onClose} />
          <Circle size="25px" color="#00FF12" onClick={onClose} />
        </Header.Buttons>

        <Header.Title>{title}</Header.Title>
      </Header>

      <Separator />

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
