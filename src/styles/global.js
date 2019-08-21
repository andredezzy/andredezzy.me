import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 15px;
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
      background: #aaa;
    }
  }

  html, body, #app, .container {
    height: 100%;
  }

  body {
    font: 21px 'Poppins', sans-serif;
    font-weight: 500;
    background: #F2F2F2;
    color: #707070;
    -webkit-font-smoothing: antialiased !important;
  }

  .container {
    @media (max-width: 1024px) {
      padding: 0;
      margin: 0;

      max-width: 1024px;
    }

    @media (max-width: 1200px) {
      padding: 0;
      margin: 0;

      max-width: 1200px;
    }

    @media (min-width: 1200px) {
      max-width: 1220px;
    }
  }

  .modal-backdrop.show {
    opacity: .6;
  }
`;
