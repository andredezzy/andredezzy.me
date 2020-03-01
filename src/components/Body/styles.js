import styled from "styled-components";

import { getLuminance, darken, lighten } from "polished";

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

  @media (min-width: 830px) {
    margin-top: 50px;
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
    border: 3px solid ${({ theme }) => theme.colors.background};

    margin: 0 35px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      getLuminance(theme.colors.background) < 0.1
        ? lighten(0.05, theme.colors.background)
        : darken(0.1, theme.colors.background)};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) =>
      getLuminance(theme.colors.background) < 0.1
        ? lighten(0.1, theme.colors.background)
        : darken(0.3, theme.colors.background)};
  }
`;
