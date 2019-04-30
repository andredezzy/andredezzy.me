import React from "react";
import { Route } from "react-router-dom";

import styled from "styled-components";

import Home from "./pages/Home";

const AppProvider = () => (
    <Router>
        <Route exact path="/" component={Home} />
    </Router>
);

export default AppProvider;

const Router = styled.div``;
