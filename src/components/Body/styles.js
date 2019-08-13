import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  overflow: hidden;

  margin-top: 15px;

  & > span {
    font-size: 1px;
  }

  & > div:first-child {
    margin-left: 15px;
  }

  & > div:last-of-type {
    margin-right: 20px;
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
