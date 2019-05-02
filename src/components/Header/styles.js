import styled from "styled-components";

export const HeaderContainer = styled.div`
    .header-row .col-md-auto {
        display: flex;
        align-items: center;

        .logo {
            margin: 50px 0 40px;
            width: 200px;
            margin-right: 30px;

            @media (max-width: 576px) {
                margin-left: 25%;
            }
        }
    }
`;
