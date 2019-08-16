import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

import Float from './components/Float';

export default function App() {
  const [floatComponent, setFloatComponent] = useState(null);

  return (
    <>
      <Container>
        <Route exact path="/" component={() => <Home setFloatComponent={setFloatComponent} />} />
      </Container>

      <Float
        show={floatComponent !== null}
        render={floatComponent}
        onClose={() => setFloatComponent(null)}
      />

      <GlobalStyle />
    </>
  );
}
