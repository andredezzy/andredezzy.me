import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  overflow: hidden;

  @media (max-height: 768px) {
    margin-top: 15px;
  }

  @media (min-height: 768px) {
    margin-top: calc(${window.outerHeight} * 0.07px);
  }

  @media screen and (max-width: 1140px) {
    overflow: scroll;
    overflow-y: hidden;
  }

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 3px solid #f2f2f2;

    margin: 0 35px;
  }

  &::-webkit-scrollbar-track {
    background: #ccc;
  }

  &::-webkit-scrollbar-thumb {
    background: #707070;
  }
`;

export const Spacing = styled.div`
  display: flex;
  font-size: 1px;
`;
