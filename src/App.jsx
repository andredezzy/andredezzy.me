import React from 'react';
import { Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Container>
        <Route exact path="/" component={Home} />
      </Container>

      <GlobalStyle />
    </>
  );
}
