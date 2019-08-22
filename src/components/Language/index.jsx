import React from 'react';
import PropTypes from 'prop-types';

import { Container, Circle } from './styles';

export default function Language({ label, color, style }) {
  return (
    <Container style={style}>
      <Circle size="12px" color={color} />
      <span>{label}</span>
    </Container>
  );
}

Language.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

Language.defaultProps = {
  style: {},
};

const languagesComponent = [
  {
    language: 'JavaScript',
    component: <Language label="JavaScript" color="#F1E05A" />,
  },
  {
    language: 'default',
    component: <Language label="No language found" color="#333" />,
  },
];

export function getComponentForLanguage(language) {
  const languageComponent = languagesComponent.find(
    element => element.language.toLowerCase() === language.toLowerCase(),
  );

  if (!languageComponent) return getComponentForLanguage('default');

  return languageComponent.component;
}
