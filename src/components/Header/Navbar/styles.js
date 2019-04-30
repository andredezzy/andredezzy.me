import styled from "styled-components";

export const NavbarContainer = styled.div`
    border-bottom: 0.5px solid #ccc;

    .navbar {
        padding: 10px 15px 10px 15px;

        .navbar-brand {
            color: #555;
            text-transform: uppercase;
            font-size: 18px;
        }

        .mr-auto.navbar-nav {
            margin-left: -50px;
        }

        .nav-link {
            font-weight: 500;
        }

        .nav-link.active {
            color: #444;
            border-bottom: 2px solid #222;
        }
    }
`;
