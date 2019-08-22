import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 6px;
  }

  & > span {
    font-size: 15px;
    color: #707070;
    opacity: 0.6;

    margin-bottom: -2px;
  }
`;
