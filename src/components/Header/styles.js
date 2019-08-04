import styled from 'styled-components';

export const Images = styled.div`
  display: flex;

  & :last-child {
    margin-left: 35px;
  }

  @media screen and (max-width: 992px) {
    & > img {
      width: 130px;
    }
  }
`;

export const Summary = styled.div`
  margin-left: 50px;

  & > div {
    display: flex;
    flex-direction: column;

    span[aria-label='emoji'] {
      margin: 0 7px;
    }
  }

  @media screen and (max-width: 992px) {
    margin-left: 0;

    font-size: 18px;
    margin-top: 25px;
  }
`;

export const Container = styled.div`
  margin-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    margin-top: 40px;
    flex-direction: column;
  }
`;
