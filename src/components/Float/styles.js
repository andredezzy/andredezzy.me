import styled from 'styled-components';

import { Modal as BootstrapModal } from 'react-bootstrap';

export const Modal = styled(BootstrapModal)`
  display: flex !important;
  justify-content: center;
  align-items: center;

  & .modal-dialog {
    max-width: none;

    & .modal-content {
      background: #f1f1f1;

      border: 0;
      border-radius: 0.5rem;

      padding: 10px 20px 20px;

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
`;

Header.Buttons = styled.div`
  display: flex;
`;

Header.Title = styled.span`
  font-size: 30px;

  transition: all 0.3s ease;

  @media (max-width: 576px) {
    font-size: 24px;
  }

  @media (max-width: 320px) {
    font-size: 22px;
  }
`;

export const Circle = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  background: ${({ color }) => color || '#CCC'};
  opacity: 0.5;

  border-radius: 50%;

  margin-right: 7px;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 576px) {
    width: ${({ size }) => `calc(${size} - 7px)`};
    height: ${({ size }) => `calc(${size} - 7px)`};
  }

  @media (max-width: 320px) {
    width: ${({ size }) => `calc(${size} - 8px)`};
    height: ${({ size }) => `calc(${size} - 8px)`};
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 7px;

  background: #e5e5e5;
  border-radius: 100px;

  margin: 8px 0 20px;
`;
