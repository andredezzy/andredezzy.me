import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-size: 14px;
    color: #707070;
    opacity: 0.6;
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
