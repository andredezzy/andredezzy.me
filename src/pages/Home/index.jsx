import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Card from '@/components/Card';

export default function Home({ setFloatComponent }) {
  function handleOpenCard(cardId) {
    console.log('clicked card -> ', cardId);

    setFloatComponent(cardId);
  }

  return (
    <Container>
      <Header />

      <Body>
        <Card id="about-me" title="About me 👦" onClick={handleOpenCard} />
        <Card id="my-projects" title="My projects 💻" onClick={handleOpenCard} />
        <Card
          id="coming-soon"
          title="❌"
          fontSize="115px"
          opacity={0.6}
          centered
          onClick={handleOpenCard}
        />
      </Body>
    </Container>
  );
}

Home.propTypes = {
  setFloatComponent: PropTypes.func,
};

Home.defaultProps = {
  setFloatComponent: () => {},
};
