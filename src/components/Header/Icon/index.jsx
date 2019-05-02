import React from "react";

import { IconContainer } from "./styles";

const Icon = ({ href, icon, text, maxWidth }) => (
    <IconContainer className="icon" maxWidth={maxWidth}>
        <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt="icon" />
            <span>{text}</span>
        </a>
    </IconContainer>
);

export default Icon;
