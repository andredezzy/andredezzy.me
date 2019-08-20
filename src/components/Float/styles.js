import styled from 'styled-components';

import { Modal as BootstrapModal } from 'react-bootstrap';

export const Modal = styled(BootstrapModal)`
  display: flex !important;
  justify-content: center;
  align-items: center;

  & .modal-dialog {
    max-width: none;

    & .modal-content {
      background: #f9f9f9;

      border: 0;
      border-radius: 0.5rem;

      padding: 5px 14px;

      transition: width 0.3s ease;

      @media (max-width: 830px) {
        width: 90vw;
      }

      @media (min-width: 830px) {
        width: 75vw;
      }

      @media (min-width: 1200px) {
        width: 60vw;
      }

      @media (min-width: 1500px) {
        width: 50vw;
      }

      @media (min-width: 1800px) {
        width: 40vw;
      }

      @media (min-width: 2100px) {
        width: 35vw;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 10px;
`;

Header.Buttons = styled.div`
  display: flex;
`;

Header.Title = styled.span`
  font-size: 30px;
`;

export const Circle = styled.div`
  width: ${({ size }) => size || '50px'};
  height: ${({ size }) => size || '50px'};

  background: ${({ color }) => color || '#CCC'};
  border-radius: 50%;

  margin-right: 7px;
`;
