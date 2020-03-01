import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import usePersistedState from "@/utils/usePersistedState";

import { ThemeProvider } from "styled-components";

import { Container } from "react-bootstrap";

import GlobalStyle from "@/styles/global";

import { light, dark } from "@/styles/themes";

import Home from "@/pages/Home";

import Float from "@/components/Float";

export default function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const switchTheme = newTheme => {
    console.log("Switching theme...");
    setTheme(newTheme || (theme.title === "light" ? dark : light));
  };

  useEffect(() => {
    switchTheme();
  }, []);

  const [float, setFloat] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <>
        <Container>
          <Route
            exact
            path="/"
            component={() => <Home setFloat={setFloat} />}
          />
        </Container>

        <Float
          show={!!float}
          title={float ? float.title : null}
          render={float ? float.component : null}
          onClose={() => setFloat(null)}
        />

        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
