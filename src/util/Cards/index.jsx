import React from 'react';

import MyProjects from './MyProjects';

const pages = [
  {
    card: 'my-projects',
    component: <MyProjects />,
  },
];

// eslint-disable-next-line import/prefer-default-export
export function getComponentForCard(cardId) {
  const page = pages.find(element => element.card === cardId);

  return page ? page.component : `No component found for '${cardId}'`;
}
