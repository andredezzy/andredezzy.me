import styled from 'styled-components';

export const Container = styled.div``;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  min-height: 100px;
  max-height: 200px;

  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.05);

  padding: 13px 20px;

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
