import styled from "styled-components";

export const NavbarContainer = styled.div`
    border-bottom: 2px solid #eee;

    .navbar {
        .navbar-brand {
            transition: transform 0.3s ease-in-out;

            :hover {
                transform: scale(1.5);
            }
        }

        .navbar-nav {
            width: 100%;
            display: flex;
            justify-content: flex-end;
        }
    }
`;
