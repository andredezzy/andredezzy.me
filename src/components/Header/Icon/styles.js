import styled from "styled-components";

export const IconContainer = styled.div`
    padding: 10px 10px;
    border-radius: 360px;
    background-color: #eee;
    margin-right: 10px;
    position: relative;
    width: 70px;

    :hover {
        background-color: #ddd;
        color: #333;
        width: ${props => (props.maxWidth ? props.maxWidth : "100px")};
        transition: width 1s ease-in-out;

        a span {
            animation: show-text 2s both;
            top: 25px;

            @keyframes show-text {
                0% {
                    margin-left: 30px;
                }
                100% {
                    opacity: 1;
                    margin-left: 70px;
                }
            }
        }
    }

    a {
        transition: all 0.2s ease-in-out;
        margin-right: 10px;
        color: #444;
        width: 100%;
        text-decoration: none;

        img {
            z-index: 4;
        }

        span {
            margin: 0 5px;
            font-weight: 500;
            text-transform: uppercase;
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
        }
    }
`;
