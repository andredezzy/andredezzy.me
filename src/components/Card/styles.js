import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-end')};
  align-items: center;

  background: #f6f6f6;

  margin: 15px;

  min-width: 350px;
  height: 350px;
  max-height: 350px;

  bottom: 0;

  padding: 15px 30px;
  border-radius: 15px;

  box-shadow: 0px 7px 8px 0px rgba(0, 0, 0, 0.05);

  cursor: default;

  & > span {
    font-size: ${({ fontSize }) => fontSize || '44px'};

    opacity: ${({ opacity }) => opacity || '1'};

    @media (max-width: 1216px) {
      font-size: ${({ fontSize }) => fontSize || '39px'};
    }
  }
`;
