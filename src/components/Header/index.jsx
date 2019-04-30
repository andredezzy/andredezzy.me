import React from "react";

import { HeaderContainer } from "./styles";

import { Container, Row, Col } from "react-bootstrap";

import Navbar from "./Navbar";

import Logo from "../../assets/logo.png";

const Header = () => (
    <HeaderContainer>
        <Navbar />

        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <a href="#/">
                        <img className="logo" src={Logo} alt="logo" />
                    </a>
                </Col>
            </Row>
        </Container>
    </HeaderContainer>
);

export default Header;
