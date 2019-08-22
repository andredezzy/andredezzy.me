import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  overflow: scroll;
  overflow-x: hidden;

  border-radius: 5px;

  @media (min-width: 576px) {
    padding-right: 15px;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    margin-bottom: 20px;
  }

  & > :last-child {
    margin-bottom: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  min-height: 100px;
  max-height: 500px;

  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.05);

  padding: 13px 20px;

  margin: 10px 0;

  span[aria-label='emoji'] {
    margin-right: 7px;
  }
`;

Card.Title = styled.span`
  font-size: 26px;
  color: #707070;
`;

Card.Description = styled.span`
  font-size: 19px;
  color: #707070;
  opacity: 0.65;
`;

Card.Information = styled.div`
  display: flex;

  margin-top: 10px;
`;

export const Gradient = styled.div`
  position: absolute;

  right: 0;
  left: 0;
  bottom: 0;

  height: 25px;

  background: ${({ to }) => `linear-gradient(
    to ${to},
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.5) 71%,
    rgba(255, 255, 255, 1) 100%
  );`}

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
