import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html::-webkit-scrollbar {
        width: 10px;
    }

    html::-webkit-scrollbar-track {
        background: #5c5f68;
    }

    html::-webkit-scrollbar-thumb {
        background: #3a3f47;
    }
`;
