import React from "react";

import { HeaderContainer } from "./styles";

import { Row, Col } from "react-bootstrap";

import Navbar from "./Navbar";
import Icon from "./Icon";

import Logo from "../../assets/logo.png";

import GitHubIcon from "../../assets/icons/github.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";

const Header = () => (
    <HeaderContainer>
        <Navbar />

        <Row className="header-row justify-content-md-center">
            <Col md="auto">
                <a href="#/">
                    <img className="logo" src={Logo} alt="logo" />
                </a>

                <Icon icon={GitHubIcon} maxWidth="140px" href="http://github.andredezzy.me" text="GitHub" />
                <Icon icon={TwitterIcon} maxWidth="150px" href="http://twitter.andredezzy.me" text="Twitter" />
                <Icon icon={InstagramIcon} maxWidth="175px" href="http://instagram.andredezzy.me" text="Instagram" />
            </Col>
        </Row>
    </HeaderContainer>
);

export default Header;
