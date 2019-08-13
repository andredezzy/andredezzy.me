import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: 1140px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
