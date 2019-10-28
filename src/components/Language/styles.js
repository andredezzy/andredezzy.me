import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  transition: all 100ms ease;

  &:hover {
    transform: scale(1.02);
  }

  & > span {
    font-size: 14px;
    color: #707070;
    opacity: 0.6;

    margin-bottom: -2px;

    cursor: default;
  }
`;

export const Circle = styled.div`
  width: ${({ size }) => size || '50px'};
  height: ${({ size }) => size || '50px'};

  background: ${({ color }) => color || '#CCC'};
  opacity: 0.5;

  border-radius: 50%;

  margin-right: 7px;

  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
