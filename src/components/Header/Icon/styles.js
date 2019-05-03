import styled from "styled-components";

export const IconContainer = styled.div`
    padding: 10px;
    border-radius: 360px;
    background-color: #eee;
    margin-right: 10px;
    position: relative;
    width: 70px;
    transition: width 1s ease-in-out;

    :hover {
        background-color: #ddd;
        color: #333;
        width: ${props => (props.maxWidth ? props.maxWidth : "100px")};

        a span {
            animation: show-text 2s both;
            opacity: 1;
            transition: opacity 1s ease-in-out;

            @keyframes show-text {
                0% {
                    margin-left: 40px;
                }
                10% {
                    margin-left: 50px;
                }
                100% {
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
            position: absolute;
            top: 25px;
            left: 0;
            opacity: 0;
        }
    }
`;
