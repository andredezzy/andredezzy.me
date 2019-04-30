import React, { Component } from "react";

import styled, { createGlobalStyle } from "styled-components";
import { Container } from "react-bootstrap";

import Scrollbar from "./components/Scrollbar";
import Header from "./components/Header";

import AppProvider from "./AppProvider";

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <GlobalStyle />
                <Scrollbar />

                <Header />

                <Container>
                    <AppProvider />
                </Container>
            </AppWrapper>
        );
    }
}

export default App;

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

    html, body {
        height: 1000px;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: Poppins, sans-serif;
        /* background-image: linear-gradient(#dc00ff, #aa00ff); */
        background-color: #fcfcfc;
    }

    @media (min-width: 1200px){
        .container {
            max-width: 1440px;
        }
    }

    @media (min-width: 992px){
        .container {
            max-width: 1240px;
        }
    }
`;

const AppWrapper = styled.div``;
