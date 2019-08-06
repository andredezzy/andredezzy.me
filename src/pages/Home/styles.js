import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: calc(${window.outerHeight} * 0.05px);

  @media (min-width: 1140px) {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 0;
  }
`;
