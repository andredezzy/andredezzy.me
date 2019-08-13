import styled from 'styled-components';

export const Images = styled.div`
  display: flex;

  & :last-child {
    margin-left: 35px;
  }

  @media (max-width: 830px) {
    & > img {
      width: 140px;
    }
  }

  @media (max-width: 768px) {
    & > img {
      width: 135px;
    }
  }

  @media (max-width: 576px) {
    & > img {
      width: 130px;
    }

    & :last-child {
      margin-right: 10px;
    }
  }
`;

export const Summary = styled.div`
  margin-left: 50px;

  & > div {
    display: flex;
    flex-direction: column;

    span[aria-label='emoji'] {
      margin-left: 7px;
    }
  }

  @media (max-width: 830px) {
    margin: 0 20px;
    margin-top: 25px;

    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 19px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 830px) {
    flex-direction: column;
  }

  @media (max-height: 568px) {
    margin-top: 118px;
  }
`;
