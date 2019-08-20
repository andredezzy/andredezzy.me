import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import Header from '@/components/Header';
import Body from '@/components/Body';
import Card from '@/components/Card';

import { getComponentForCard } from '@/components/Float/pages';

export default function Home({ setFloat }) {
  function handleOpenCard(cardId, title) {
    const component = getComponentForCard(cardId);

    setFloat({ title, component });
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
  setFloat: PropTypes.func,
};

Home.defaultProps = {
  setFloat: () => console.log("'setFloat()' function not found!"),
};
