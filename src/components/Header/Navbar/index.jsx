import React from "react";

import { NavbarContainer } from "./styles";

import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => (
    <NavbarContainer>
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#" title=":D"><span role="img" aria-label="Rainbow Flag">🏳️‍🌈</span></Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="#/">Home</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </NavbarContainer>
);

export default NavigationBar;
