import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import GlobalStyle from './styles/global';

import Home from './pages/Home';

import Float from './components/Float';

export default function App() {
  const [float, setFloat] = useState(null);

  return (
    <>
      <Container>
        <Route exact path="/" component={() => <Home setFloat={setFloat} />} />
      </Container>

      <Float
        show={float !== null}
        title={float ? float.title : null}
        render={float ? float.component : null}
        onClose={() => setFloat(null)}
      />

      <GlobalStyle />
    </>
  );
}
