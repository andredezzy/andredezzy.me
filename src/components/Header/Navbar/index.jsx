import React from "react";

import { NavbarContainer } from "./styles";

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => (
    <NavbarContainer>
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#">André 'Dezzy'</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Nav className="mr-auto">
                                <Nav.Link href="#/">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>

                <Nav>
                    <Nav.Link href="http://github.andredezzy.com">GH</Nav.Link>
                    <Nav.Link href="http://instagram.andredezzy.com">I</Nav.Link>
                    <Nav.Link href="http://twitter.andredezzy.com">T</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </NavbarContainer>
);

export default NavigationBar;
