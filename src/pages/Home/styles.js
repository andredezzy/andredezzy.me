import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  top: 50%;
  transform: translateY(-50%);

  @media (max-height: 700px) {
    margin: 50px 0 30px 0;
  }

  @media (min-width: 1140px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
